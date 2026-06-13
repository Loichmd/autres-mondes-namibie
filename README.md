# Landing page — Namibie · Autres Mondes

Site premium orienté conversion pour Mathilde (Autres Mondes) :
appel découverte offert, accompagnement (dès 95 €) et visio conseil (99 €/h),
avec 6 pages dédiées aux « instants » phares de la Namibie.

## Lancer
Ouvrir `index.html` dans un navigateur. Aucune dépendance ni build.

## Arborescence
```
index.html                  → landing principale
instants/   (6 pages)       → les 6 « instants » phares
  ├─ sossusvlei.html · deadvlei.html · etosha.html
  └─ himba.html · kokerboom.html · namib.html
pepites/    (18 pages)      → les « pépites » autour de chaque instant, par région
  ├─ Désert du Namib : sesriem-canyon · dune45 · hidden-vlei · montgolfiere
  ├─ Côte atlantique : sandwich-harbour · kayak-otaries · swakopmund · sandboarding
  ├─ Nord-Ouest      : twyfelfontein · spitzkoppe · elephants-desert
  ├─ Nord (Etosha)   : pan-etosha · waterberg · onguma
  └─ Grand Sud       : giants-playground · kolmanskop · fish-river · kalahari
assets/
  ├─ css/style.css          → feuille de style partagée (toutes les pages)
  ├─ js/main.js             → nav, menu mobile, reveals, FAQ
  └─ img/                    → 8 photos Namibie optimisées
```

### Le maillage (pensé pour « perdre » et guider le lecteur)
- Accueil (bento 6 cartes) → **page d'instant**
- Page d'instant → ses **3 pépites** (section « Les pépites à découvrir »), + les 5 autres instants
- Page de **pépite** → présentation du lieu, 3-4 temps forts, les **pépites voisines** (même région)
  + retour à l'instant parent, le **bloc offres** (appel découverte + visio) et la grille des **6 instants**
- Toutes les pages portent les CTA de conversion. 786 liens internes, 0 cassé.

Chaque page d'instant contient : présentation de l'activité, un **programme type heure par heure**
(« 5h45 — on franchit les grilles… ») pour se projeter, une **note rassurante** (côté SAFE),
les temps forts illustrés + une grille **« Et aussi… »** de pépites alentour, infos pratiques,
**3 retours voyageurs**, un **bloc de conversion** (appel découverte + visio) et l'accès aux
**5 autres instants**. Tout est interconnecté (bento de l'accueil → instants → autres instants → accueil).
La narration est à la **1ʳᵉ personne du pluriel (« on / nous »)** : Mathilde accompagne le voyageur.

## Liens de réservation (déjà câblés)
- **Appel découverte (offert)** → `https://calendly.com/evasionprestige1/30min`
  (nav, menu mobile, hero, formule « sur mesure », CTA final, footer, et chaque page d'instant)
- **Visio conseil 99 €/h** → `https://zcal.co/i/xVyQbEPM`
  (formule « visio », footer, bloc CTA des pages d'instant)
- **Accompagnement (dès 95 €)** → pointe pour l'instant vers la section contact / appel découverte
  (`#contact`), **en attente de ton lien dédié**. Rechercher `href="#contact"` dans `index.html`
  pour le remplacer quand tu l'auras.

## Identité reprise du site Autres Mondes
- **Couleurs** : terracotta `#e84a43`, ambre `#eaa04b`, sables crème `#fef6ed / #fffaf3`, encre `#22190f`.
- **Typographies** : Playfair Display (titres, comme le site) + Plus Jakarta Sans (texte, substitut libre de Gotham).
- **Ton** : « Vous rêvez, je planifie, vous profitez » / « Voyagez sans stress ».

## Avis voyageurs
- Les avis de l'accueil (Alexandra, Morgane) reprennent des verbatims des récits publiés sur
  autresmondes.voyage (10 jours en novembre / témoignage Morgane).
- Les avis des pages d'instant sont **fictifs** (prénoms et citations inventés à des fins de démo).
  À remplacer par de vrais retours dès que possible.

## À personnaliser avant mise en ligne
1. **Lien accompagnement** — voir ci-dessus.
2. **Photo de Mathilde** — la section « À propos » utilise un paysage (`assets/img/safari.jpg`).
   Idéalement, la remplacer par un portrait réel.
3. **Visuels** — pour coller au feed Instagram, remplacer les images de `assets/img/` par les plus
   belles stills des réels (en gardant les mêmes noms de fichiers, rien d'autre à changer).
4. **Avis fictifs** des pages d'instant → vrais témoignages.
5. **E-mail / réseaux** dans le footer (lien Instagram déjà branché).

## Lead magnet — guide gratuit (capture e-mail) → systeme.io
Une section **« Guide offert »** (id `#guide`, sur l'accueil) capture prénom + e-mail en échange
d'un guide PDF. Objectif : transformer un visiteur en lead, puis le nourrir par e-mails (nurturing).

**Connexion à systeme.io — 2 méthodes (voir le commentaire dans `index.html`, section `#guide`) :**
- **A (recommandé)** : remplacer le `<form class="optin-form">` par le **code d'intégration** du
  formulaire systeme.io (Tunnel/Formulaire → « Intégrer »). s.io gère alors l'envoi + le guide.
- **B** : garder le formulaire et renseigner son `action="…"` avec l'URL systeme.io (POST). Les champs
  sont déjà nommés `first_name` et `email`. Tant que `action` est vide, un message de confirmation
  s'affiche (démo) — c'est volontaire.

Le PDF du guide et la **séquence de nurturing** se configurent côté systeme.io (e-mail de livraison
+ campagne). Le titre/contenu du guide affichés sont des placeholders, à ajuster librement.

## Bibliothèque d'images
**37 photos** au total (~11 Mo), toutes issues de **Wikimedia Commons** (licences Creative Commons),
téléchargées via l'API puis redimensionnées (≤1500 px) et compressées localement.
Fichiers `lib_*.jpg` = bibliothèque enrichie (canyon de Sesriem, otaries, épave de la Côte des
Squelettes, gravures de Twyfelfontein, Spitzkoppe, éléphant du désert, Kolmanskop, Fish River Canyon,
suricates, girafe, lion, rhino, flamants, Voie lactée, etc.). Chaque page a son visuel dédié.

> Pour un usage commercial, **remplacer de préférence par les photos de Mathilde / ses reels** (mêmes
> noms de fichiers = aucune autre modification), ou créditer chaque auteur selon la licence du fichier.

## Crédits images (à respecter ou remplacer)
Photos issues de **Wikimedia Commons** sous licences Creative Commons (CC BY / CC BY-SA).
Avant une mise en production commerciale, **remplacer de préférence par les photos de Mathilde**,
ou créditer les auteurs selon la licence de chaque fichier :
- `hero-dune.jpg`, `deadvlei.jpg`, `etosha.jpg` — Giles Laurent (CC BY-SA 4.0)
- `dunes.jpg` — Sossusvlei (Wikimedia Commons)
- `himba.jpg`, `namib-aerial.jpg`, `quivertree.jpg`, `safari.jpg` — Wikimedia Commons (CC)

Images redimensionnées (≤1600 px) et compressées (~2,6 Mo au total).
