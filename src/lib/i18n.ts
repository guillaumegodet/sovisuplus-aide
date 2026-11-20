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
		versionTitle: 'Version de SoVisu+ décrite par cette aide',
		llmsTitle: 'Aide SoVisu+',
		llmsSummary:
			"SoVisu+ est une application au service des chercheurs et des structures de recherche : visualiser et qualifier les publications, les identifiants et les collaborations. Chaque page existe en Markdown (lien ci-dessous) ; /llms-full.txt contient toute l'aide en un seul fichier.",
		sections: {
			accueil: 'Accueil et nouveautés',
			demarrer: 'Démarrer',
			donnees: 'Comprendre les données',
			guides: 'Guides pratiques',
			casUsage: 'Cas d’usage',
		},
	},
	en: {
		quiOuTitle: 'Who can do it, and where',
		profiles: 'Profiles',
		inApp: 'In SoVisu+',
		availableOn: 'Available on',
		viewMarkdown: 'View as Markdown',
		versionTitle: 'SoVisu+ version described by this help',
		llmsTitle: 'SoVisu+ Help',
		llmsSummary:
			'SoVisu+ is an application for researchers and research structures: view and curate publications, identifiers and collaborations. Every page is also available in Markdown (links below); /en/llms-full.txt contains the whole help in a single file.',
		sections: {
			accueil: "Home and what's new",
			demarrer: 'Get started',
			donnees: 'Understanding the data',
			guides: 'How-to guides',
			casUsage: 'Use cases',
		},
	},
} as const;
