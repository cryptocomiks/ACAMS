"""Synthesised 15 s soundtrack: soft, reassuring, varied. Cues match reel.html."""
import numpy as np
from scipy import signal
from scipy.io import wavfile

SR = 48000
DUR = 15.0
N = int(SR * DUR)
rng = np.random.default_rng(11)
L = np.zeros(N)
R = np.zeros(N)


def hz(note):
    names = {"C": 0, "C#": 1, "D": 2, "D#": 3, "E": 4, "F": 5, "F#": 6, "G": 7, "G#": 8, "A": 9, "A#": 10, "B": 11}
    n, o = note[:-1], int(note[-1])
    return 440.0 * 2 ** ((names[n] + 12 * (o + 1) - 69) / 12)


def add(sig, t0, gain=1.0, pan=0.0):
    i = int(t0 * SR)
    if i >= N:
        return
    sig = sig[: N - i] * gain
    lg, rg = np.cos((pan + 1) * np.pi / 4), np.sin((pan + 1) * np.pi / 4)
    L[i:i + len(sig)] += sig * lg * 1.414
    R[i:i + len(sig)] += sig * rg * 1.414


def lowpass(x, fc, order=2):
    b, a = signal.butter(order, fc / (SR / 2), "low")
    return signal.lfilter(b, a, x)


def env_adsr(n, a, d, s, r, sus_len):
    a_n, d_n, r_n = int(a * SR), int(d * SR), int(r * SR)
    s_n = max(0, n - a_n - d_n - r_n)
    e = np.concatenate([
        np.linspace(0, 1, a_n, endpoint=False) ** 2,
        np.linspace(1, s, d_n, endpoint=False),
        np.full(s_n, s),
        np.linspace(s, 0, r_n) ** 1.5,
    ])
    return e[:n] if len(e) >= n else np.pad(e, (0, n - len(e)))


# ---------- Pad (warm, detuned, slow) ----------
def pad_voice(f, dur):
    n = int(dur * SR)
    t = np.arange(n) / SR
    v = np.zeros(n)
    for cents, g in ((-6, 0.5), (0, 0.7), (7, 0.5)):
        ff = f * 2 ** (cents / 1200)
        ph = rng.uniform(0, 2 * np.pi)
        v += g * (np.sin(2 * np.pi * ff * t + ph) + 0.22 * np.sin(4 * np.pi * ff * t + ph) + 0.08 * np.sin(6 * np.pi * ff * t))
    v *= 1 + 0.12 * np.sin(2 * np.pi * rng.uniform(0.15, 0.35) * t)
    return v


CHORDS = [
    (0.0, 4.75, ["D3", "A3", "E4", "F#4", "C#5"], 1300),
    (4.5, 6.8, ["B2", "F#3", "A3", "C#4", "D4"], 1500),
    (6.55, 9.9, ["G2", "D3", "F#3", "A3", "B3"], 1700),
    (9.65, 12.45, ["A2", "E3", "B3", "C#4", "E4"], 1900),
    (12.2, 15.0, ["D2", "A2", "F#3", "C#4", "E4", "A4"], 2300),
]
for (t0, t1, notes, cutoff) in CHORDS:
    dur = t1 - t0
    mix = sum(pad_voice(hz(n), dur) * (0.9 if i else 1.1) for i, n in enumerate(notes))
    mix = lowpass(mix, cutoff)
    first = t0 == 0.0
    e = env_adsr(len(mix), 1.4 if first else 0.45, 0.4, 0.85, 0.5 if t1 < 15 else 0.6, 0)
    add(mix * e, t0, gain=0.018, pan=0.0)

# ---------- Soft air bed ----------
air = lowpass(rng.standard_normal(N), 900, 2) * 0.02
air *= np.interp(np.arange(N) / SR, [0, 2, 4.4, 4.7, 12, 15], [0.2, 0.5, 0.9, 0.3, 0.4, 0.0])
L += air
R += np.roll(air, 300)


# ---------- Instruments ----------
def pluck(f, dur=1.8, bright=1.0):
    """Felt-piano / kalimba hybrid."""
    n = int(dur * SR)
    t = np.arange(n) / SR
    e = np.exp(-t / 0.55) * (1 - np.exp(-t / 0.004))
    v = np.sin(2 * np.pi * f * t) + 0.35 * bright * np.sin(4 * np.pi * f * t) * np.exp(-t / 0.18) \
        + 0.12 * bright * np.sin(2 * np.pi * 3.01 * f * t) * np.exp(-t / 0.09)
    return v * e


def bell(f, dur=3.5):
    n = int(dur * SR)
    t = np.arange(n) / SR
    v = np.zeros(n)
    for ratio, g, tau in ((1, 1, 1.6), (2.0, 0.45, 0.9), (2.76, 0.3, 0.6), (5.4, 0.12, 0.25)):
        v += g * np.sin(2 * np.pi * f * ratio * t) * np.exp(-t / tau)
    return v * (1 - np.exp(-t / 0.003))


def sub(f, dur=2.2, drop=0.94):
    n = int(dur * SR)
    t = np.arange(n) / SR
    fr = f * (drop + (1 - drop) * np.exp(-t / 0.15))
    ph = 2 * np.pi * np.cumsum(fr) / SR
    return np.sin(ph) * np.exp(-t / 0.7) * (1 - np.exp(-t / 0.02))


def whoosh(dur, f0, f1, peak=0.7):
    n = int(dur * SR)
    x = rng.standard_normal(n)
    t = np.linspace(0, 1, n)
    out = np.zeros(n)
    # time-varying band-pass by blocks
    blk = 512
    zi = None
    for s in range(0, n, blk):
        k = s / n
        fc = f0 * (f1 / f0) ** k
        b, a = signal.butter(2, [max(30, fc * 0.6) / (SR / 2), min(20000, fc * 1.6) / (SR / 2)], "band")
        if zi is None:
            zi = signal.lfilter_zi(b, a) * 0
        seg, zi = signal.lfilter(b, a, x[s:s + blk], zi=zi)
        out[s:s + blk] = seg
    e = np.where(t < peak, (t / peak) ** 2, ((1 - t) / (1 - peak)) ** 1.6)
    return out * e


def tick(f=1900, dur=0.05):
    n = int(dur * SR)
    t = np.arange(n) / SR
    return np.sin(2 * np.pi * f * t) * np.exp(-t / 0.008)


def pop(f0=500, f1=1100, dur=0.12):
    n = int(dur * SR)
    t = np.arange(n) / SR
    fr = f0 + (f1 - f0) * (1 - np.exp(-t / 0.02))
    return np.sin(2 * np.pi * np.cumsum(fr) / SR) * np.exp(-t / 0.035) * (1 - np.exp(-t / 0.002))


def thump(dur=0.5):
    n = int(dur * SR)
    t = np.arange(n) / SR
    fr = 70 + 60 * np.exp(-t / 0.03)
    return np.sin(2 * np.pi * np.cumsum(fr) / SR) * np.exp(-t / 0.12)


# ---------- Cues ----------
# S1 intro: letters arrive
for t0, n, p in ((0.25, "D5", -0.3), (0.5, "F#5", 0.1), (0.78, "A5", 0.35), (1.05, "C#6", -0.1)):
    add(pluck(hz(n)), t0, 0.09, p)
add(pluck(hz("E5"), bright=0.5), 1.28, 0.07, 0.2)
add(pluck(hz("A4"), bright=0.4), 1.5, 0.06, -0.2)

# into the tunnel
add(whoosh(0.75, 300, 3000, 0.8), 1.85, 0.10, 0.0)
tun = whoosh(2.1, 400, 5500, 0.95)
add(tun, 2.4, 0.075, -0.4)
add(np.roll(tun, 2000), 2.4, 0.075, 0.4)
# airy shimmer riser before convergence
n = int(0.9 * SR)
t = np.arange(n) / SR
riser = sum(np.sin(2 * np.pi * hz(x) * t * (1 + 0.03 * t)) for x in ("A5", "D6", "E6")) * (t / t[-1]) ** 2.5
add(riser, 3.72, 0.022, 0.0)
# tunnel term glints (varied, sparse)
for i, t0 in enumerate((2.75, 3.05, 3.3, 3.62, 3.9)):
    add(pluck(hz(("E6", "A5", "F#6", "C#6", "B5")[i]), 1.0, 0.3), t0, 0.03, (-0.6, 0.5, -0.2, 0.7, 0.1)[i])

# S3 logo impact
add(sub(hz("B1"), 2.4), 4.6, 0.30, 0.0)
for n_, g in (("B4", 0.06), ("D5", 0.045), ("F#5", 0.04)):
    add(bell(hz(n_)), 4.62, g, 0.0)
add(pluck(hz("F#5"), bright=0.6), 5.0, 0.07, -0.2)
add(pluck(hz("B5"), bright=0.6), 5.2, 0.07, 0.2)
add(pluck(hz("D5")), 5.68, 0.08, 0.1)
add(pluck(hz("A4"), bright=0.4), 5.98, 0.06, -0.1)
add(whoosh(0.55, 2000, 400, 0.4), 6.38, 0.07, 0.0)

# S4 card demo
for i, t0 in enumerate((6.97, 7.05, 7.13, 7.21)):
    add(tick(1500 + i * 180), t0, 0.035, -0.3 + i * 0.2)
add(tick(2600, 0.03), 7.9, 0.06, 0.25)
add(thump(0.25), 7.9, 0.10, 0.2)
add(bell(hz("G5"), 2.0), 7.96, 0.05, 0.2)
add(bell(hz("B5"), 2.0), 8.06, 0.045, 0.25)
add(bell(hz("D6"), 2.0), 8.16, 0.035, 0.3)
add(pop(520, 1150), 8.38, 0.08, 0.5)
add(pop(460, 980), 8.63, 0.08, -0.5)
add(pluck(hz("F#5"), 1.2, 0.3), 8.78, 0.04, 0.0)
add(whoosh(0.6, 500, 4000, 0.7), 9.4, 0.08, -0.3)

# S5 modes
add(thump(), 9.88, 0.16, -0.3)
add(thump(), 10.05, 0.14, 0.3)
for i, (t0, n_) in enumerate(((10.36, "A4"), (10.5, "C#5"), (10.64, "E5"))):
    add(pluck(hz(n_), 1.2, 0.5), t0, 0.06, -0.4)
for k in range(8):
    add(tick(3200, 0.03), 10.25 + k * 0.22, 0.018, 0.45)
n = int(1.15 * SR)
t = np.arange(n) / SR
fill = np.sin(2 * np.pi * np.cumsum(hz("A4") * (1 + t / t[-1])) / SR) * np.sin(np.pi * t / t[-1]) ** 2
add(lowpass(fill, 2500), 10.45, 0.03, 0.3)
for i, n_ in enumerate(("A5", "C#6", "E6")):
    add(bell(hz(n_), 2.2), 11.58 + i * 0.07, 0.04, 0.35)

# S6 finale
add(whoosh(0.8, 250, 6000, 0.85), 11.95, 0.10, 0.0)
add(sub(hz("D2"), 2.5, 0.97), 12.75, 0.22, 0.0)
for i, n_ in enumerate(("D5", "E5", "F#5", "A5", "B5", "A5", "F#5")):
    add(pluck(hz(n_), 1.6, 0.6), 12.58 + i * 0.09, 0.05, -0.3 + i * 0.1)
for n_, g in (("D5", 0.05), ("F#5", 0.04), ("A5", 0.035), ("D6", 0.025)):
    add(bell(hz(n_), 3.0), 13.02, g, 0.0)
add(pluck(hz("A5"), 2.0, 0.4), 13.95, 0.05, 0.15)
add(pluck(hz("D6"), 2.0, 0.3), 14.12, 0.04, -0.15)


# ---------- Reverb ----------
def make_ir(sec=2.6, seed=3):
    g = np.random.default_rng(seed)
    n = int(sec * SR)
    t = np.arange(n) / SR
    ir = g.standard_normal(n) * np.exp(-t / 0.55)
    ir = lowpass(ir, 5000)
    ir[: int(0.02 * SR)] = 0
    return ir / np.sqrt(np.sum(ir ** 2))


wetL = signal.fftconvolve(L, make_ir(seed=3))[:N]
wetR = signal.fftconvolve(R, make_ir(seed=4))[:N]
L2 = L * 0.8 + wetL * 0.45
R2 = R * 0.8 + wetR * 0.45

# ---------- Master ----------
b, a = signal.butter(2, 28 / (SR / 2), "high")
L2, R2 = signal.lfilter(b, a, L2), signal.lfilter(b, a, R2)
fade = np.ones(N)
fi = int(0.03 * SR)
fade[:fi] = np.linspace(0, 1, fi)
fo0 = int(14.2 * SR)
fade[fo0:] = np.linspace(1, 0, N - fo0) ** 1.4
L2 *= fade
R2 *= fade
st = np.stack([L2, R2], axis=1)
st /= np.max(np.abs(st)) + 1e-9
st = np.tanh(st * 1.15) / np.tanh(1.15)  # gentle glue
st *= 10 ** (-1.0 / 20)
rms = np.sqrt(np.mean(st ** 2))
print("peak dBFS", 20 * np.log10(np.max(np.abs(st))), "rms dBFS", 20 * np.log10(rms))
wavfile.write("soundtrack.wav", SR, (st * 32767).astype(np.int16))
