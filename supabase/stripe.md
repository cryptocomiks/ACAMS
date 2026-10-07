# Activer le Premium (Stripe + Supabase)

Tout se fait depuis les tableaux de bord, sans installer d'outil. Commence en **mode test** de Stripe
(interrupteur « Test mode »), vérifie avec la carte `4242 4242 4242 4242`, puis refais les étapes 2 à 5 en mode réel.

## 1. Supabase : la table des abonnements
SQL Editor → New query → colle `supabase/premium.sql` → **Run**.
(Si ce n'est pas déjà fait, lance aussi `supabase/leaderboard.sql`.)

## 2. Stripe : les produits et les prix
Product catalog → **Add product** :

| Produit | Prix | Type |
|---|---|---|
| CAMS Premium | 9,99 € | Récurrent, **mensuel** |
| CAMS Premium | 24,99 € | Récurrent, **tous les 3 mois** (Custom → every 3 months) |
| CAMS Premium | 59,99 € | Récurrent, **annuel** |
| CAMS Exam Pass 6 mois | 39,99 € | **Paiement unique** (One-off) |

Le site reconnaît la formule automatiquement : mensuel, tous les 3 mois, annuel, ou paiement unique = Exam Pass (6 mois).

## 3. Stripe : un lien de paiement par prix
Payment Links → **New** → choisis le prix → onglet **After payment** → « Don't show confirmation page » →
redirection vers : `https://acam-orpin.vercel.app/#/premium?status=success`
(Optionnel : « Allow promotion codes » pour faire des codes promo.) Copie l'URL `https://buy.stripe.com/...` de chacun des 4 liens.

## 4. Stripe : le portail client
Settings → Billing → **Customer portal** → active-le (annulation, factures, changement de carte) → copie le **lien de connexion**
(`https://billing.stripe.com/p/login/...`).

## 5. Supabase : la fonction qui reçoit les paiements
1. Edge Functions → **Deploy a new function** → **Via Editor** → nom : `stripe-webhook`.
   Colle le contenu de `supabase/functions/stripe-webhook/index.ts` → **Deploy**.
2. Dans les réglages de la fonction : désactive **Enforce JWT verification** (Stripe n'a pas de jeton Supabase ;
   la sécurité vient de la signature Stripe, vérifiée par la fonction).
3. Stripe → Developers → **Webhooks** → Add endpoint :
   - URL : `https://sfropbbpmyugfozgbglg.supabase.co/functions/v1/stripe-webhook`
   - Événements : `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`
   - Copie le **Signing secret** (`whsec_...`).
4. Supabase → Edge Functions → **Secrets** → ajoute :
   - `STRIPE_SECRET_KEY` = ta clé secrète Stripe (`sk_test_...` puis `sk_live_...`)
   - `STRIPE_WEBHOOK_SECRET` = le `whsec_...`

## 6. Le site
Mets les 4 liens et le lien du portail dans `assets/config.js` (bloc `stripe`), ou envoie-les moi.
Tant que ces champs sont vides, la page Premium s'affiche mais le bouton dit « Payments open very soon ».

## Comment ça marche
- Le bouton d'achat ouvre le lien Stripe avec l'identifiant du compte (`client_reference_id`) : il faut un compte (gratuit)
  pour acheter, le Premium suit l'utilisateur sur tous ses appareils.
- Stripe prévient la fonction → elle écrit dans `entitlements` (personne d'autre ne peut y écrire) → le site lit la ligne.
- Abonnement annulé : le Premium reste jusqu'à la fin de la période payée. Exam Pass : 6 mois, sans renouvellement.

## À savoir
- Le site est statique : les limites du plan gratuit (20 questions/jour, flou) sont appliquées dans le navigateur. Un utilisateur
  très technique pourrait les contourner ; la vraie valeur payante, c'est l'expérience complète et le suivi.
- Pour vendre, il te faut des mentions légales, des CGV et une politique de confidentialité, et gérer la TVA selon ton statut
  (Stripe Tax peut la calculer). Demande-moi si tu veux un modèle de pages.
