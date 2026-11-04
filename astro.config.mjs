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
			title: { fr: 'Aide SoVisu+', en: 'SoVisu+ Help' },
			description:
				"Centre d'aide de SoVisu+ : visualiser et qualifier ses publications, ses identifiants et ses collaborations.",
			logo: { src: './src/assets/logo-sovisuplus.svg', alt: 'SoVisu+', replacesTitle: true },
			favicon: '/favicon.svg',
			// French at the root, English under /en/: translated pages live under src/content/docs/en/ with the
			// same file paths (required by the language picker); untranslated ones fall back to French.
			defaultLocale: 'root',
			locales: {
				root: { label: 'Français', lang: 'fr' },
				en: { label: 'English', lang: 'en' },
			},
			lastUpdated: true,
			customCss: ['./src/styles/sovisuplus.css'],
			components: {
				// Adds the « Voir en Markdown » link under each page title.
				PageTitle: './src/components/PageTitle.astro',
			},
			// Keep in sync with SIDEBAR_ORDER in src/lib/markdown.ts.
			sidebar: [
				{ label: 'Démarrer', translations: { en: 'Get started' }, items: [{ autogenerate: { directory: 'demarrer' } }] },
				{
					label: 'Guides pratiques',
					translations: { en: 'How-to guides' },
					items: [
						{ label: 'Mon profil', translations: { en: 'My profile' }, items: [{ autogenerate: { directory: 'guides/mon-profil' } }] },
						{ label: 'Mes publications', translations: { en: 'My publications' }, items: [{ autogenerate: { directory: 'guides/publications' } }] },
						{ label: 'Fiche d’une publication', translations: { en: 'Publication record' }, items: [{ autogenerate: { directory: 'guides/fiche-publication' } }] },
						{ label: 'HAL', items: [{ autogenerate: { directory: 'guides/hal' } }] },
						{ label: 'Visualiser', translations: { en: 'Visualize' }, items: [{ autogenerate: { directory: 'guides/visualiser' } }] },
						{ label: 'Structures', items: [{ autogenerate: { directory: 'guides/structures' } }] },
						{ label: 'Corriger une donnée', translations: { en: 'Fix a data error' }, items: [{ autogenerate: { directory: 'guides/corriger' } }] },
						{ label: 'Assistant', translations: { en: 'Assistant' }, slug: 'guides/assistant' },
						{ label: 'Support', translations: { en: 'Support' }, slug: 'guides/support' },
					],
				},
				{ label: 'Tutoriels', translations: { en: 'Tutorials' }, items: [{ autogenerate: { directory: 'tutoriels' } }] },
				{ label: 'Comprendre les données', translations: { en: 'Understanding the data' }, items: [{ autogenerate: { directory: 'donnees' } }] },
				{ label: 'Nouveautés', translations: { en: "What's new" }, slug: 'nouveautes' },
			],
		}),
	],
});
