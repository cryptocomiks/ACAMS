# CAMS Exam Trainer

Site statique pour s'entraîner à l'examen **ACAMS CAMS** (7e édition, périmètre Anti-Financial Crime).

Quatre onglets : **Home** (modes de jeu, quêtes du jour, défi du jour), **Learn** (cours, flashcards, sprint des chiffres),
**Progress** (préparation à l'examen, graphiques, badges) et **Ranks** (tableau de scores perso + classements).

## Modes

- **Practice** : 30 questions, sans chrono. Réponse correcte et explication affichées juste après chaque question.
- **Mock exam** : 30 questions, chrono de 53 min (rythme du vrai examen : 120 questions en 3h30), questions marquables (flag), navigation libre. Score, détail par domaine et correction complète à la toute fin.
- **Smart review** : les questions à revoir selon la répétition espacée (20 max).
- **Lightning** : 15 questions, sablier de 30 s chacune (45 s pour les « choose two »), bonus de vitesse.
- **Survival** : 3 vies, on enchaîne jusqu'à la dernière.
- **Daily challenge** : les mêmes 10 questions pour tout le monde ce jour-là ; seule la première tentative compte
  (elle est « utilisée » dès qu'elle commence), les suivantes sont des rejouées.
- **Flashcards** (répétition espacée) et **Numbers sprint** (60 s de seuils, délais et pourcentages), tirés du cours.

Chaque test tire 30 questions dans la banque en respectant la pondération de l'examen
(D1 30 % · D2 20 % · D3 30 % · D4 20 %) et en donnant la priorité aux questions pas encore vues.
Filtres : par domaine, « sujets les plus fréquents » uniquement, ou « mes erreurs ».
La progression est sauvegardée dans le navigateur (localStorage), un test en cours peut être repris.

Raccourcis clavier : `A`–`H` pour répondre, `Entrée` pour valider/suivant (quand aucun bouton n'a le focus),
`←`/`→` pour naviguer. Flashcards : `Espace` pour retourner, `1`/`2` pour noter. Sprint : `1`–`4`.

## Cours (onglet Learn)

14 leçons en anglais (`data/course/m00.js` à `m13.js`) : fonctionnement de l'examen, puis les 4 domaines
(blanchiment, financement du terrorisme, fraude/corruption, actifs virtuels, normes FATF, cadres US / UE / UK,
sanctions, programme AFC, CDD/PEP, surveillance et SAR, enquêtes et technologies) et une fiche récapitulative des chiffres.
Chaque leçon : « ce qui tombe le plus », sections avec astuces d'examen, flashcards, questions chiffrées, questions
de la banque liées et sources officielles. Lire une leçon jusqu'au bout rapporte de l'XP.

## D'où viennent les réponses

1001 questions distinctes au total (D1 297 · D2 201 · D3 302 · D4 201, soit la pondération 30/20/30/20 de l'examen), dont 540 « hard » et une large part de cas pratiques (client, montants, pays, signaux d'alerte, « que faire en premier ? »). Chaque question est rédigée puis relue par un vérificateur indépendant, source par source (lien officiel sur chaque question). Aucune question officielle ACAMS ni « dump ».

Les questions sont originales (style examen), ce ne sont pas des questions officielles ACAMS (confidentielles).
Chaque réponse a été vérifiée contre les textes officiels (septembre-octobre 2026) et chaque question porte un champ
`source` (lien affiché sous l'explication) : recommandations FATF, 31 CFR (eCFR), FinCEN (règles, FAQ, advisories),
OFAC (FAQ, règlements), Federal Reserve / OCC, Wolfsberg, Egmont, UNODC, EUR-Lex / AMLA, legislation.gov.uk.
Le site du FATF bloque les accès automatisés : le contenu a été lu dans les copies officielles hébergées par des
organismes régionaux du FATF (EAG, APG).

Changements récents intégrés (le matériel ACAMS de juillet 2025 peut être antérieur) : FAQ SAR FinCEN d'octobre 2025
(pas d'obligation de documenter un « no-SAR », revue d'activité continue non obligatoire), SR 26-2 d'avril 2026
(remplace SR 11-7 / SR 21-8), révision FATF R.1 (fév. 2025) et R.16 (juin 2025), règle finale BOI de FinCEN (août 2026).

## Formules (Free / Premium)

- **Free, sans compte** : 15 questions par jour utilisables dans tous les modes (Practice, Lightning, Survival, Smart review, thèmes,
  filtres), le défi du jour, 1 Mock exam complet, 1 Numbers sprint par jour, 2 leçons. Rien n'est bloqué à l'arrivée : le Premium
  n'est proposé qu'une fois les 15 questions faites (carte « Daily dose done ») ou via l'onglet Premium. Score de préparation,
  graphiques et points faibles affichés floutés.
- **Premium** (Stripe, compte requis) : tout en illimité. 9,99 €/mois · 24,99 €/3 mois · 39,99 € Exam Pass 6 mois (paiement unique) · 59,99 €/an,
  environ 30 % sous les concurrents. Mise en route : `supabase/stripe.md`. Code : `assets/plan.js`, `supabase/premium.sql`,
  `supabase/functions/stripe-webhook/`.
- Classement : des **rivaux 🤖** (identifiés comme bots) complètent le tableau tant qu'il y a peu de joueurs, et s'adaptent au niveau.

## Comptes, progression et gamification

- **Sans compte** : tout marche, la progression reste dans le navigateur.
- **Avec compte** (Supabase, email + mot de passe) : progression synchronisée entre appareils (fusion à chaque envoi :
  un onglet resté ouvert n'écrase jamais la progression faite ailleurs). Activation : voir `supabase/README.md`
  (créer le projet, lancer `supabase/schema.sql`, `supabase/leaderboard.sql`, `supabase/community.sql` puis `supabase/profile.sql`, coller l'URL et la clé *anon* dans `assets/config.js`).
- **Classements** (onglet Ranks) : XP de la semaine, défi du jour, all-time. Participation volontaire avec un nom public
  choisi, on peut quitter à tout moment. Les scores sont calculés dans le navigateur ; le serveur les garde plausibles
  (voir `supabase/leaderboard.sql`).
- **Gamification** (`assets/progress.js`) : XP et niveaux, série de jours 🔥 avec gels de série ❄️ (1 tous les 7 jours, max 2),
  objectif quotidien (10/20/30/50), 3 quêtes par jour + coffre bonus, records perso, calendrier d'activité, 26 badges,
  score de préparation à l'examen. Sons doux (coupés par défaut, bouton 🔊 en haut).
- **Révision intelligente** : répétition espacée (Leitner) — une question ratée revient dans la même session (seconde chance, options mélangées), puis en révision après 10 min, 1, 3, 7, 16 et 35 jours ; la pratique mélange automatiquement les erreurs à revoir et la page de résultats propose « Retry my mistakes »
- **Profil** : photo (recadrée en 256 × 256 et stockée dans le bucket Supabase `avatars`), titre (ex. « AML Consultant ») et lien LinkedIn,
  affichés dans le compte, sur le classement (si on l'a rejoint) et sur le certificat. Nécessite `supabase/profile.sql`.
- **Most missed** (`#/mistakes`) : toutes les questions ratées, classées de la plus ratée à la moins ratée, entraînement en un clic sur le top 20.
  Onglet **Community traps** : les questions que les apprenants ratent le plus au premier essai (anonyme, une réponse par personne
  et par question, affiché à partir de 5 apprenants). Nécessite `supabase/community.sql`.
- **Plan 30 jours** (`#/plan`) : date d'examen, diagnostic gratuit de 40 questions (pondéré 30/20/30/20), puis une mission par jour
  (leçon + quiz, révision espacée, flashcards, examens blancs aux jalons, dernière semaine en pratique mélangée, veille légère).
  Les révisions sont recalées pour toutes repasser avant l'examen. Basé sur la recherche : pratique du test et espacement
  (Dunlosky et al. 2013), écart optimal (Cepeda et al. 2008), prétest (Richland et al. 2009), réapprentissage successif (Rawson & Dunlosky).
  à chaque bonne réponse. Mode « Review », sujets les plus faibles avec entraînement ciblé, précision par domaine.

## Design et vidéo

Interface inspirée d'apple.com : typo SF Pro (Inter auto-hébergée en repli), sections plein écran, tuiles, contrôles segmentés,
apparitions au scroll, mode sombre automatique. En haut de page, une vidéo de 15 s (`assets/video/cams-trainer.mp4`,
1080p 60 fps, bande-son synthétisée) en lecture auto sans son, avec boutons lecture/pause et son. Source dans `video-src/`.

## Structure

```
index.html
assets/app.js         routeur, accueil, quiz (6 modes), résultats, page Progress
assets/progress.js    XP, niveaux, séries, quêtes, badges, répétition espacée, fusion pour la synchro
assets/learn.js       cours, flashcards, sprint des chiffres
assets/leaderboard.js onglet Ranks
assets/account.js     comptes Supabase et synchronisation
assets/charts.js      graphiques SVG (courbe, colonnes, barres, jauge)
assets/fx.js          sons, confettis, célébrations, sablier
assets/style.css      styles (clair/sombre)
data/course/          leçons du cours (m00 à m13)
data/domain1-4.js     banque de base (150 questions, par domaine)
data/extra-*.js     lots thématiques : affaires réelles, Europe/UK, pièges, secteurs, monde, KYC avancé, enquêtes, sanctions, professions et secteurs à risque, crimes sous-jacents, programme AFC, outils et technologies (360)
assets/video/       vidéo + poster
assets/fonts/       Inter (licence OFL)
video-src/          source de la vidéo (animation + son)
```

Format d'une question :

```js
{ id: "D1-001", domain: 1, topic: "...", hy: true, q: "...",
  options: ["...", "...", "...", "..."], answer: [1], explanation: "...",
  source: [{ label: "FATF R.12", url: "https://..." }] }
```

`changed` (optionnel) signale une règle modifiée depuis le matériel ACAMS de juillet 2025 (badge « Rule changed recently »).

`answer` est une liste d'index (plusieurs pour les questions « Choose two/three »). `hy: true` marque un sujet fréquemment testé.

## Déploiement Vercel

Aucun build : importer le repo dans Vercel avec le preset **Other**, sans commande de build, dossier de sortie = racine.
Ou en local : ouvrir `index.html` directement dans le navigateur.

> Outil d'étude indépendant, non affilié à ACAMS.
