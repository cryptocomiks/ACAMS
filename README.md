# CAMS Exam Trainer

Site statique pour s'entraîner à l'examen **ACAMS CAMS** (7e édition, périmètre Anti-Financial Crime).

## Modes

- **Practice** : 30 questions, sans chrono. Réponse correcte et explication affichées juste après chaque question.
- **Mock exam** : 30 questions, chrono de 53 min (rythme du vrai examen : 120 questions en 3h30), questions marquables (flag), navigation libre. Score, détail par domaine et correction complète à la toute fin.

Chaque test tire 30 questions dans la banque en respectant la pondération de l'examen
(D1 30 % · D2 20 % · D3 30 % · D4 20 %) et en donnant la priorité aux questions pas encore vues.
Filtres : par domaine, « sujets les plus fréquents » uniquement, ou « mes erreurs ».
La progression est sauvegardée dans le navigateur (localStorage), un test en cours peut être repris.

Raccourcis clavier : `A`–`F` pour répondre, `Entrée` pour valider/suivant, `←`/`→` pour naviguer.

## D'où viennent les réponses

Les questions sont originales (style examen), ce ne sont pas des questions officielles ACAMS (confidentielles).
Chaque réponse a été vérifiée contre les textes officiels en septembre 2026 et chaque question porte un champ
`source` (lien affiché sous l'explication) : recommandations FATF, 31 CFR (eCFR), FinCEN (règles, FAQ, advisories),
OFAC (FAQ, règlements), Federal Reserve / OCC, Wolfsberg, Egmont, UNODC, EUR-Lex / AMLA, legislation.gov.uk.
Le site du FATF bloque les accès automatisés : le contenu a été lu dans les copies officielles hébergées par des
organismes régionaux du FATF (EAG, APG).

Changements récents intégrés (le matériel ACAMS de juillet 2025 peut être antérieur) : FAQ SAR FinCEN d'octobre 2025
(pas d'obligation de documenter un « no-SAR », revue d'activité continue non obligatoire), SR 26-2 d'avril 2026
(remplace SR 11-7 / SR 21-8), révision FATF R.1 (fév. 2025) et R.16 (juin 2025), règle finale BOI de FinCEN (août 2026).

## Design et vidéo

Interface inspirée d'apple.com : typo SF Pro (Inter auto-hébergée en repli), sections plein écran, tuiles, contrôles segmentés,
apparitions au scroll, mode sombre automatique. En haut de page, une vidéo de 15 s (`assets/video/cams-trainer.mp4`,
1080p 60 fps, bande-son synthétisée) en lecture auto sans son, avec boutons lecture/pause et son. Source dans `video-src/`.

## Structure

```
index.html
assets/app.js       logique du quiz
assets/style.css    styles (clair/sombre)
data/domain1-4.js   banque de questions, une par domaine
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

`answer` est une liste d'index (plusieurs pour les questions « Choose two/three »). `hy: true` marque un sujet fréquemment testé.

## Déploiement Vercel

Aucun build : importer le repo dans Vercel avec le preset **Other**, sans commande de build, dossier de sortie = racine.
Ou en local : ouvrir `index.html` directement dans le navigateur.

> Outil d'étude indépendant, non affilié à ACAMS.
