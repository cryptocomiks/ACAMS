// CAMS Exam Trainer: Stripe webhook -> public.entitlements.
// Secrets (Supabase > Edge Functions > Secrets): STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET.
// SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are provided automatically.
// Deploy with "Verify JWT" OFF: Stripe calls it without a Supabase token; the Stripe signature is checked instead.
import Stripe from "npm:stripe@17";
import { createClient } from "npm:@supabase/supabase-js@2";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!);
const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET")!;
const cryptoProvider = Stripe.createSubtleCryptoProvider(); // Web Crypto, required in Deno
const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const PASS_DAYS = 183; // Exam Pass: 6 months

function planOf(sub: Stripe.Subscription): string {
  const r = sub.items.data[0]?.price?.recurring;
  if (r?.interval === "year") return "annual";
  if (r?.interval === "month" && (r.interval_count || 1) >= 3) return "quarterly";
  return "monthly";
}
function periodEnd(sub: Stripe.Subscription): string | null {
  // Newer API versions put current_period_end on the subscription item.
  const t = (sub as any).current_period_end ?? (sub.items.data[0] as any)?.current_period_end;
  return t ? new Date(t * 1000).toISOString() : null;
}
async function saveSubscription(sub: Stripe.Subscription, userId?: string | null) {
  const row: Record<string, unknown> = {
    plan: planOf(sub), status: sub.status, current_period_end: periodEnd(sub),
    stripe_customer_id: typeof sub.customer === "string" ? sub.customer : sub.customer.id,
    stripe_subscription_id: sub.id, updated_at: new Date().toISOString(),
  };
  if (userId) {
    const { error } = await db.from("entitlements").upsert({ user_id: userId, ...row });
    if (error) throw error;
  } else {
    const { error } = await db.from("entitlements").update(row).eq("stripe_subscription_id", sub.id);
    if (error) throw error;
  }
}

Deno.serve(async (req) => {
  const body = await req.text();
  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(body, req.headers.get("stripe-signature") ?? "", webhookSecret, undefined, cryptoProvider);
  } catch {
    return new Response("Invalid signature", { status: 400 });
  }
  try {
    if (event.type === "checkout.session.completed") {
      const s = event.data.object as Stripe.Checkout.Session;
      const userId = s.client_reference_id;
      if (!userId || !UUID.test(userId)) return new Response("No user on this checkout", { status: 200 });
      if (s.mode === "subscription" && s.subscription) {
        const sub = await stripe.subscriptions.retrieve(typeof s.subscription === "string" ? s.subscription : s.subscription.id);
        await saveSubscription(sub, userId);
      } else if (s.mode === "payment" && s.payment_status === "paid") {
        // Exam Pass: one payment, adds 6 months (on top of any time left).
        const { data } = await db.from("entitlements").select("current_period_end").eq("user_id", userId).maybeSingle();
        const from = Math.max(Date.now(), data?.current_period_end ? new Date(data.current_period_end).getTime() : 0);
        const { error } = await db.from("entitlements").upsert({
          user_id: userId, plan: "pass6", status: "paid",
          current_period_end: new Date(from + PASS_DAYS * 864e5).toISOString(),
          stripe_customer_id: typeof s.customer === "string" ? s.customer : s.customer?.id ?? null,
          stripe_subscription_id: null, updated_at: new Date().toISOString(),
        });
        if (error) throw error;
      }
    } else if (event.type === "customer.subscription.updated" || event.type === "customer.subscription.deleted") {
      await saveSubscription(event.data.object as Stripe.Subscription);
    }
    return new Response("ok", { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response("Error", { status: 500 }); // Stripe retries
  }
});
