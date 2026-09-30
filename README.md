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

## Structure

```
index.html
assets/app.js       logique du quiz
assets/style.css    styles (clair/sombre)
data/domain1-4.js   banque de questions, une par domaine
```

Format d'une question :

```js
{ id: "D1-001", domain: 1, topic: "...", hy: true, q: "...",
  options: ["...", "...", "...", "..."], answer: [1], explanation: "..." }
```

`answer` est une liste d'index (plusieurs pour les questions « Choose two/three »). `hy: true` marque un sujet fréquemment testé.

## Déploiement Vercel

Aucun build : importer le repo dans Vercel avec le preset **Other**, sans commande de build, dossier de sortie = racine.
Ou en local : ouvrir `index.html` directement dans le navigateur.

> Outil d'étude indépendant, non affilié à ACAMS.
