// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Public URL of the help centre, served by the Cloudflare Worker « sovisuplus-aide » (wrangler.jsonc).
// Used for the sitemap and the absolute links of /llms.txt. Override with HELP_SITE_URL for a custom domain.
const site = process.env.HELP_SITE_URL || 'https://sovisuplus-aide.guillaumegodet.workers.dev';

export default defineConfig({
	site,
	integrations: [
		starlight({
			title: 'Aide SoVisu+',
			description:
				"Centre d'aide de SoVisu+ : visualiser et qualifier ses publications, ses identifiants et ses collaborations.",
			favicon: '/favicon.svg',
			// French at the root. The English version will live under src/content/docs/en/ with the same file paths.
			defaultLocale: 'root',
			locales: { root: { label: 'Français', lang: 'fr' } },
			lastUpdated: true,
			customCss: ['./src/styles/sovisuplus.css'],
			components: {
				// Adds the « Voir en Markdown » link under each page title.
				PageTitle: './src/components/PageTitle.astro',
			},
			// Keep in sync with SIDEBAR_ORDER in src/lib/markdown.ts.
			sidebar: [
				{ label: 'Démarrer', items: [{ autogenerate: { directory: 'demarrer' } }] },
				{
					label: 'Guides pratiques',
					items: [
						{ label: 'Mon profil', items: [{ autogenerate: { directory: 'guides/mon-profil' } }] },
						{ label: 'Mes publications', items: [{ autogenerate: { directory: 'guides/publications' } }] },
						{ label: 'Fiche d’une publication', items: [{ autogenerate: { directory: 'guides/fiche-publication' } }] },
						{ label: 'HAL', items: [{ autogenerate: { directory: 'guides/hal' } }] },
						{ label: 'Visualiser', items: [{ autogenerate: { directory: 'guides/visualiser' } }] },
						{ label: 'Structures', items: [{ autogenerate: { directory: 'guides/structures' } }] },
						{ label: 'Corriger une donnée', items: [{ autogenerate: { directory: 'guides/corriger' } }] },
						{ label: 'Assistant', slug: 'guides/assistant' },
						{ label: 'Support', slug: 'guides/support' },
					],
				},
				{ label: 'Tutoriels', items: [{ autogenerate: { directory: 'tutoriels' } }] },
				{ label: 'Comprendre les données', items: [{ autogenerate: { directory: 'donnees' } }] },
				{ label: 'Nouveautés', slug: 'nouveautes' },
			],
		}),
	],
});
