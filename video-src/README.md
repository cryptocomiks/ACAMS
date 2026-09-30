# Showreel source (15 s, 1920×1080, 60 fps)

- `reel.html` — the whole animation, driven frame by frame by `window.renderAt(t)` (deterministic, no CSS timers).
- `render.js` — opens the page in headless Chromium (Playwright), captures 900 frames and pipes them to ffmpeg → `silent.mp4`.
- `sound.py` — synthesises the soundtrack with numpy/scipy (warm pad chords per scene, felt-piano plucks, bells, whooshes, reverb) → `soundtrack.wav`.

```
pip install numpy scipy imageio-ffmpeg
python3 -m http.server   # from the repo root, then render from this folder
node render.js && python3 sound.py
ffmpeg -i silent.mp4 -i soundtrack.wav -c:v libx264 -crf 24 -pix_fmt yuv420p -c:a aac -b:a 160k -shortest -movflags +faststart ../assets/video/cams-trainer.mp4
```
