# Activer les comptes (Supabase, gratuit)

1. Crée un compte sur https://supabase.com → **New project** (région Europe, ex. Paris ou Frankfurt). Note le mot de passe de la base, il ne sert pas au site.
2. **SQL Editor → New query** : colle le contenu de `schema.sql` → **Run**.
   Puis une deuxième requête avec le contenu de `leaderboard.sql` → **Run** (classement : semaine, défi du jour, all-time).
   Les deux fichiers peuvent être relancés sans risque.
3. **Authentication → Sign In / Providers → Email** : laisse « Email » activé. « Confirm email » activé est recommandé (les gens cliquent sur un lien avant de pouvoir se connecter).
4. **Authentication → URL Configuration** :
   - *Site URL* : `https://acam-orpin.vercel.app` (ou ton domaine)
   - *Redirect URLs* : ajoute `https://acam-orpin.vercel.app/**`
5. **Project Settings → API** (ou *Connect*) : copie **Project URL** et la clé **anon / publishable**.
   Colle-les dans `assets/config.js` (`supabaseUrl`, `supabaseAnonKey`) puis pousse sur GitHub. Vercel redéploie tout seul.

La clé *anon* est publique par conception : la sécurité vient des règles RLS de `schema.sql` (chacun ne lit et n'écrit que sa propre ligne).
Ne mets **jamais** la clé *service_role* dans le site.

Classement : la participation est volontaire (onglet Ranks → « Join », avec un nom public choisi ; on peut le quitter à tout moment).
Seuls ce nom et les scores sont visibles par les autres utilisateurs connectés. Les scores sont calculés dans le navigateur ;
`leaderboard.sql` ajoute des garde-fous côté serveur (XP plafonnée à un rythme humain, niveau recalculé, premier résultat du défi
du jour définitif, 15 s minimum), mais un tricheur déterminé peut encore gonfler un peu ses scores : c'est un classement de motivation.

Emails : le serveur d'email intégré de Supabase est limité (quelques emails par heure). Pour plus d'utilisateurs,
configure un SMTP (Resend, Brevo…) dans **Authentication → Emails → SMTP Settings**.
