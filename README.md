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

410 questions au total, toutes vérifiées source par source (lien officiel sur chaque question). Aucune question officielle ACAMS ni « dump ».

Les questions sont originales (style examen), ce ne sont pas des questions officielles ACAMS (confidentielles).
Chaque réponse a été vérifiée contre les textes officiels en septembre 2026 et chaque question porte un champ
`source` (lien affiché sous l'explication) : recommandations FATF, 31 CFR (eCFR), FinCEN (règles, FAQ, advisories),
OFAC (FAQ, règlements), Federal Reserve / OCC, Wolfsberg, Egmont, UNODC, EUR-Lex / AMLA, legislation.gov.uk.
Le site du FATF bloque les accès automatisés : le contenu a été lu dans les copies officielles hébergées par des
organismes régionaux du FATF (EAG, APG).

Changements récents intégrés (le matériel ACAMS de juillet 2025 peut être antérieur) : FAQ SAR FinCEN d'octobre 2025
(pas d'obligation de documenter un « no-SAR », revue d'activité continue non obligatoire), SR 26-2 d'avril 2026
(remplace SR 11-7 / SR 21-8), révision FATF R.1 (fév. 2025) et R.16 (juin 2025), règle finale BOI de FinCEN (août 2026).

## Comptes, progression et gamification

- **Sans compte** : tout marche, la progression reste dans le navigateur.
- **Avec compte** (Supabase, email + mot de passe) : progression synchronisée entre appareils (fusion à chaque envoi :
  un onglet resté ouvert n'écrase jamais la progression faite ailleurs). Activation : voir `supabase/README.md`
  (créer le projet, lancer `supabase/schema.sql` puis `supabase/leaderboard.sql`, coller l'URL et la clé *anon* dans `assets/config.js`).
- **Classements** (onglet Ranks) : XP de la semaine, défi du jour, all-time. Participation volontaire avec un nom public
  choisi, on peut quitter à tout moment. Les scores sont calculés dans le navigateur ; le serveur les garde plausibles
  (voir `supabase/leaderboard.sql`).
- **Gamification** (`assets/progress.js`) : XP et niveaux, série de jours 🔥 avec gels de série ❄️ (1 tous les 7 jours, max 2),
  objectif quotidien (10/20/30/50), 3 quêtes par jour + coffre bonus, records perso, calendrier d'activité, 26 badges,
  score de préparation à l'examen. Sons doux (coupés par défaut, bouton 🔊 en haut).
- **Révision intelligente** : répétition espacée (Leitner) — une question ratée revient après 10 min, puis 1, 3, 7, 16, 35 jours
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
data/extra-*.js     lots thématiques : affaires réelles, Europe/UK, pièges, secteurs, monde, KYC avancé, enquêtes, sanctions (260)
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
