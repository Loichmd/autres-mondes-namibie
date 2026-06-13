# Kit design — Autres Mondes (Namibie)

Référence pour reproduire l'identité du site (utile pour styliser le formulaire systeme.io,
créer la couverture du guide PDF, ou toute autre communication).

## 🎨 Couleurs (codes hex)

| Rôle | Hex | Usage |
|---|---|---|
| **Terracotta (accent principal)** | `#E84A43` | Boutons, liens, accents, focus |
| Terracotta foncé (hover) | `#C9382F` | Survol des boutons primaires |
| **Ambre (accent secondaire)** | `#EAA04B` | Détails, icônes sur fond sombre, badges |
| Crème (fond clair) | `#FFFAF3` | Fonds de sections claires, cartes |
| Sable 50 | `#FEF6ED` | Fond clair alterné |
| Sable 100 | `#FDF1EC` | Fond clair alterné |
| **Encre (texte / fond sombre)** | `#22190F` | Texte principal, sections sombres |
| Texte adouci | `#6F6256` | Paragraphes, légendes |
| Texte estompé | `#A59A8E` | Mentions secondaires |

**Dégradé chaud (glow)** : radial `#E84A43` → transparent (sur fond sombre), ou `#EAA04B` → transparent.

### Recommandation formulaire systeme.io
- Fond du formulaire : **transparent** (ou `#FFFAF3` crème) — surtout **pas** de violet.
- Champs : fond blanc `#FFFFFF`, bordure `#EAD9CB` (sable), texte `#22190F`.
- Bouton : fond `#E84A43`, texte blanc `#FFFFFF`, coins très arrondis (pill).
- **Padding/marges du bloc : 0** (pour supprimer le margin blanc autour).

## ✍️ Typographies (Google Fonts, gratuites)

- **Titres** : **Playfair Display** (serif élégant). Poids 400/500. Style italique pour les mots accentués.
  `https://fonts.google.com/specimen/Playfair+Display`
- **Texte courant / boutons** : **Plus Jakarta Sans** (sans-serif). Poids 300 à 700.
  `https://fonts.google.com/specimen/Plus+Jakarta+Sans`

Import (déjà utilisé sur le site) :
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```
> Sur systeme.io : choisir **Playfair Display** pour les titres et **Plus Jakarta Sans** (ou à défaut
> *Jost* / *Mulish*) pour le texte. Éviter Inter, Arial, Roboto.

## 🔘 Boutons

- Forme : **pill** (coins entièrement arrondis, `border-radius: 999px`).
- Primaire : fond terracotta `#E84A43`, texte blanc, poids 600.
- Padding : ~`13px 26px`. Au survol : fond `#C9382F`.
- Souvent accompagné d'une **icône flèche** (↗) dans un petit rond à droite.

## 🧱 Cartes & conteneurs

- **Coins arrondis généreux** : `border-radius` de `18px` à `30px` (squircle).
- **Ombres douces et diffuses** (jamais d'ombre dure/noire) :
  `0 24px 50px -30px rgba(60,38,20,.32)`
- Bordures : hairline très légère `rgba(34,25,15,.08)`.
- Beaucoup d'**espace blanc** (sections très aérées).

## 🖼️ Style de la couverture du guide PDF

- Photo plein cadre (dune rouge / Deadvlei) + **dégradé sombre** en bas.
- Badge **« GUIDE OFFERT »** en pill terracotta, petit, en majuscules espacées.
- Titre en **Playfair Display** blanc : « Préparer son voyage en Namibie ».
- Sous-titre fin : « Itinéraire · saison · budget ».

## 🗣️ Ton & voix

- Bienveillant, rassurant, premium. Tutoiement évité (vouvoiement).
- Signature : *« Vous rêvez, je planifie, vous profitez »* / *« Voyagez sans stress »*.
- Narration des expériences à la 1ʳᵉ pers. du pluriel (« on / nous ») : Mathilde accompagne.

## 📐 Valeurs CSS clés (variables du site)
```css
--terracotta:#e84a43;  --terracotta-deep:#c9382f;  --amber:#eaa04b;
--cream:#fffaf3;  --sand-50:#fef6ed;  --sand-100:#fdf1ec;
--ink:#22190f;  --ink-soft:#6f6256;  --ink-faint:#a59a8e;
--radius-card:24px;  --shadow:0 24px 50px -30px rgba(60,38,20,.32);
--serif:"Playfair Display";  --sans:"Plus Jakarta Sans";
```
