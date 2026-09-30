# Activer les comptes (Supabase, gratuit)

1. Crée un compte sur https://supabase.com → **New project** (région Europe, ex. Paris ou Frankfurt). Note le mot de passe de la base, il ne sert pas au site.
2. **SQL Editor → New query** : colle le contenu de `schema.sql` → **Run**.
3. **Authentication → Sign In / Providers → Email** : laisse « Email » activé. « Confirm email » activé est recommandé (les gens cliquent sur un lien avant de pouvoir se connecter).
4. **Authentication → URL Configuration** :
   - *Site URL* : `https://acam-orpin.vercel.app` (ou ton domaine)
   - *Redirect URLs* : ajoute `https://acam-orpin.vercel.app/**`
5. **Project Settings → API** (ou *Connect*) : copie **Project URL** et la clé **anon / publishable**.
   Colle-les dans `assets/config.js` (`supabaseUrl`, `supabaseAnonKey`) puis pousse sur GitHub. Vercel redéploie tout seul.

La clé *anon* est publique par conception : la sécurité vient des règles RLS de `schema.sql` (chacun ne lit et n'écrit que sa propre ligne).
Ne mets **jamais** la clé *service_role* dans le site.

Emails : le serveur d'email intégré de Supabase est limité (quelques emails par heure). Pour plus d'utilisateurs,
configure un SMTP (Resend, Brevo…) dans **Authentication → Emails → SMTP Settings**.
