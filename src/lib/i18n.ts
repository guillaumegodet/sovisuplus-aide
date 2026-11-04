// Strings of the help centre's own components, per content language.
// Starlight's built-in UI (search, table of contents…) is translated by Starlight itself.

export type HelpLang = 'fr' | 'en';

/** Content language of a page from its collection id: English pages live under en/. */
export const langOfId = (id: string): HelpLang => (id === 'en' || id.startsWith('en/') ? 'en' : 'fr');

/** Page id without its locale prefix (en/guides/x → guides/x). */
export const baseId = (id: string): string => (langOfId(id) === 'en' ? id.replace(/^en\/?/, '') : id);

export const asHelpLang = (lang: string | undefined): HelpLang => (lang?.startsWith('en') ? 'en' : 'fr');

export const STRINGS = {
	fr: {
		quiOuTitle: 'Qui peut le faire, et où',
		profiles: 'Profils',
		inApp: 'Dans SoVisu+',
		availableOn: 'Disponible sur',
		viewMarkdown: 'Voir en Markdown',
		llmsTitle: 'Aide SoVisu+',
		llmsSummary:
			"SoVisu+ est une application au service des chercheurs et des structures de recherche : visualiser et qualifier les publications, les identifiants et les collaborations. Chaque page existe en Markdown (lien ci-dessous) ; /llms-full.txt contient toute l'aide en un seul fichier.",
		sections: {
			demarrer: 'Démarrer',
			guides: 'Guides pratiques',
			tutoriels: 'Tutoriels',
			donnees: 'Comprendre les données',
			nouveautes: 'Nouveautés',
		},
	},
	en: {
		quiOuTitle: 'Who can do it, and where',
		profiles: 'Profiles',
		inApp: 'In SoVisu+',
		availableOn: 'Available on',
		viewMarkdown: 'View as Markdown',
		llmsTitle: 'SoVisu+ Help',
		llmsSummary:
			'SoVisu+ is an application for researchers and research structures: view and curate publications, identifiers and collaborations. Every page is also available in Markdown (links below); /en/llms-full.txt contains the whole help in a single file.',
		sections: {
			demarrer: 'Get started',
			guides: 'How-to guides',
			tutoriels: 'Tutorials',
			donnees: 'Understanding the data',
			nouveautes: "What's new",
		},
	},
} as const;
