# Aide SoVisu+ — centre d'aide utilisateur

**Consulter l'aide : <https://sovisuplus-aide.guillaumegodet.workers.dev/>** ([version anglaise](https://sovisuplus-aide.guillaumegodet.workers.dev/en/))

Site statique [Starlight](https://starlight.astro.build) (Astro) qui documente [SoVisu+](https://github.com/CRISalid-esr/SoVisuPlus)
pour ses utilisateurs : chercheurs, référents de laboratoire, administrateurs fonctionnels. L'installation et
l'exploitation restent documentées dans le dépôt de SoVisu+. Licence : CeCILL v2.1.

**Version documentée :** SoVisu+ 1.6.4.

## Arborescence

```
src/content/docs/
  index.mdx               accueil
  demarrer/               SoVisu+ en 5 minutes, premiers pas, glossaire
  guides/<rubrique>/      une tâche = une page
  tutoriels/              parcours longs
  donnees/                « Comprendre les données » (référence)
  nouveautes.md
  en/                     version anglaise, mêmes chemins de fichiers
src/components/QuiOu.astro      encadré « Qui peut le faire, et où » des guides
src/components/PageTitle.astro  surcharge Starlight : lien « Voir en Markdown »
src/pages/                      version Markdown de chaque page, /llms.txt, /llms-full.txt
src/lib/i18n.ts                 libellés des composants, par langue
gabarits/                       modèles de page guide / référence (hors build)
scripts/check-links.mjs         liens et ancres internes
scripts/check-public.mjs        garde-fou contre les données personnelles ou internes
```

## Écrire une page

1. Copier `gabarits/guide.mdx` ou `gabarits/reference.mdx` à la place de la page « à venir », retirer le badge
   du frontmatter et garder `sidebar.order`.
2. Reprendre les libellés de boutons de `src/locales/fr/messages.po` du dépôt SoVisu+, à la version documentée.
3. **Aucune donnée réelle :** le site est public. Exemples fictifs, identifiants `0000-0000-0000-0000`, adresses
   `example.org`, aucun nom d'hôte interne. Seules exceptions : les contacts publics listés dans `scripts/check-public.mjs`.
4. Ne pas présenter la configuration d'un établissement comme le fonctionnement général : utiliser la mention
   « Disponibilité » (`disponibilite` de `<QuiOu>`).
5. Une fonction inachevée va dans `donnees/fonctions-a-venir`, pas dans un guide.
6. **Toute page s'écrit dans les deux langues :** `src/content/docs/en/` reprend les **mêmes chemins de fichiers** (slugs
   français, requis par le sélecteur de langue), avec des liens internes en `/en/…`. Les libellés de l'interface viennent de
   `src/locales/en/messages.po` de SoVisu+, tels quels, même maladroits : c'est ce que l'utilisateur voit à l'écran.
7. Un nouveau dossier de rubrique : l'ajouter à `sidebar` dans `astro.config.mjs` **et** à `SIDEBAR_ORDER` dans
   `src/lib/markdown.ts`.

## Construire

```bash
npm ci && npm run build   # Node ≥ 22.12 ; résultat dans dist/
npm run dev               # http://localhost:4321
```

`npm run build` enchaîne `astro build`, `check-links` et `check-public` : un lien cassé ou une donnée suspecte font
échouer le build, donc le déploiement. `PUBLIC_DENYLIST=<fichier>` ajoute une liste de termes interdits, tenue hors
de ce dépôt.

## Déploiement (Cloudflare Workers)

Worker `sovisuplus-aide` (fichiers statiques seulement, `wrangler.jsonc`), relié à ce dépôt par Workers Builds :

| Réglage | Valeur |
|---|---|
| Répertoire racine | `/` |
| Commande de build | `npm run build` |
| Commande de déploiement | `npx wrangler deploy` (branches : `npx wrangler preview`) |
| Variables de build | `NODE_VERSION=22` ; `HELP_SITE_URL=<url>` si un domaine personnalisé est ajouté |

Réglages à saisir aussi dans « Previews Base », sinon les builds de branches échouent.

## Brancher SoVisu+ sur l'aide

Dans la configuration de l'instance : `NEXT_PUBLIC_HELP_LINK_TYPE=url` et `NEXT_PUBLIC_HELP_URL=<url de l'aide>`, puis
recréer le conteneur. Le bouton « Assistance » apparaît dans la barre latérale.

## À chaque nouvelle version de SoVisu+

1. `git diff <ancienne>..<nouvelle> -- src/locales/fr/messages.po` dans le dépôt SoVisu+, plus les notes de version.
2. Revoir les pages touchées, `donnees/fonctions-a-venir` et `nouveautes.md`.
3. Relever la version documentée ici et sur l'accueil.
