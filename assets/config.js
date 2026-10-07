/* Public Supabase settings (safe to publish: the anon key only allows what the database's row-level security permits).
 * Leave empty to run without accounts: progress then stays on each device. See supabase/README.md. */
window.CAMS_CONFIG = {
  supabaseUrl: "https://sfropbbpmyugfozgbglg.supabase.co",
  supabaseAnonKey: "sb_publishable_Es7pjqIjbMsQXJKca3Y8NA_FQmfjcma",
  // Stripe Payment Links (https://buy.stripe.com/...) and the customer portal login link. See supabase/stripe.md.
  // While empty, the plans are shown but checkout says "opening soon".
  stripe: {
    monthly: "",
    quarterly: "",
    pass6: "",
    annual: "",
    portal: ""
  }
};
