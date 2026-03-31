# CLAUDE.md — Projet SunUnlimited

## Contexte du projet

Site vitrine pour **SunUnlimited**, électricien spécialisé en :
- Installation de panneaux photovoltaïques (résidentiel, professionnel, agricole)
- Bornes de recharge IRVE pour véhicules électriques
- Stockage d'énergie (batteries)
- Maintenance & monitoring

Zone d'intervention : **région Auvergne-Rhône-Alpes** (rayon 100 km).
Certifications : **RGE QualiPV**, **IRVE**, en activité depuis 2012.

## Stack technique

Site statique vanilla, aucun framework ni bundler :

| Fichier | Rôle |
|---|---|
| `index.html` | Page unique (one-page) en français |
| `style.css` | Styles — variables CSS custom, responsive mobile-first |
| `script.js` | Interactions légères (navbar, animations, formulaire) |

Police : **Inter** via Google Fonts.

## Structure de la page

1. **Navbar** — fixe avec effet scroll, menu hamburger mobile
2. **Hero** — accroche + stats (500+ installations, 12 ans, 98% satisfaits)
3. **Ruban** animé — badges de confiance (RGE, garantie 25 ans, etc.)
4. **Services** — 6 cartes (résidentiel, professionnel, stockage, borne, maintenance, monitoring)
5. **Avantages** — argumentaire + carte simulation d'économies (6 kWc, ~1 440 €/an)
6. **Réalisations** — 3 chantiers (Lyon, Grenoble, Valence)
7. **Témoignages** — 3 avis clients 5 étoiles
8. **Contact** — formulaire de devis + coordonnées
9. **Footer** — liens, certifications, copyright 2026

## Charte graphique

| Élément | Valeur |
|---|---|
| Bleu primaire | `#2B6089` |
| Bleu foncé (hover) | `#1e4d70` |
| Jaune | `#F9C41A` |
| Tagline | "You've got the power" |
| Certifications | RGE QualiPV, IRVE |

Fichiers logo disponibles à la racine (PNG = fond transparent, préférer sur JPG) :
- `logo-sunlimited-H.png` — logo horizontal fond blanc → **navbar** (fond blanc)
- `logo-sunlimited-H-blue.png` — logo horizontal fond bleu → **footer** (fond sombre)
- `logo-sunlimited-V.png` — logo vertical fond blanc
- `logo-sunlimited-V-blue.png` — logo vertical fond bleu
- `picto-sunlimited.png` — pictogramme seul fond blanc
- `picto-sunlimited-blue.png` — pictogramme fond bleu

## Conventions de code

- HTML sémantique, langue `fr`, pas de framework CSS
- CSS : variables dans `:root` (`--blue`, `--blue-dark`, `--blue-light`, `--yellow`), nommage BEM-like
- JS vanilla : pas de dépendances externes, animations via `IntersectionObserver`
- Pas de build step — les fichiers sont servis directement
- Le formulaire de contact est actuellement front-end uniquement (pas de backend)

## Tonalité & contenu

- Langue : **français**
- Ton : professionnel, rassurant, orienté bénéfices clients
- Mettre en avant : certifications RGE, aides financières (MaPrimeRénov', TVA réduite, prime autoconsommation, aide ADVENIR), retour sur investissement
- Email : `contact@sununlimited.fr`
- Téléphone : à compléter (`04 XX XX XX XX`)

## Points à compléter / à venir

- [ ] Vrai numéro de téléphone
- [ ] Photos réelles des chantiers (les `.realisation-img` utilisent des placeholders CSS)
- [ ] Branchement du formulaire de contact à un backend ou service email (ex. Formspree, Resend)
- [ ] Mentions légales (page ou modale)
- [ ] SEO : balises Open Graph, schema.org LocalBusiness
- [ ] Google Analytics ou équivalent
