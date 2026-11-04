#!/usr/bin/env node
// Guard for a public site: fails the build when a page contains something that looks like personal or
// internal data. Every example in the help must be fictional (see README). Optional extra terms, kept out
// of this public repository: one per line in the file named by PUBLIC_DENYLIST.
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('../', import.meta.url).pathname;
const SCANNED = ['src/content', 'gabarits', 'README.md'];

const RULES = [
	{ name: 'e-mail', re: /[A-Za-z0-9._%+-]+@(?!example\.(?:org|com|net)\b)[A-Za-z0-9-]+\.[A-Za-z0-9.-]*[A-Za-z]/g },
	{ name: 'internal host', re: /\b[a-z0-9.-]+\.prive\b/gi },
	{ name: 'IP address', re: /\b(?:\d{1,3}\.){3}\d{1,3}\b/g },
	{ name: 'ORCID', re: /\b\d{4}-\d{4}-\d{4}-\d{3}[\dX]\b/g },
];
// Fictional identifiers allowed in examples.
const ALLOWED = new Set(['0000-0000-0000-0000']);

const filesOf = (path) => {
	if (!existsSync(path)) return [];
	if (statSync(path).isFile()) return [path];
	return readdirSync(path).flatMap((name) => filesOf(join(path, name)));
};

const denylistFile = process.env.PUBLIC_DENYLIST;
const denied = denylistFile
	? readFileSync(denylistFile, 'utf8')
			.split('\n')
			.map((line) => line.trim().toLowerCase())
			.filter((line) => line && !line.startsWith('#'))
	: [];

const alerts = [];
const files = SCANNED.flatMap((path) => filesOf(join(ROOT, path)));
for (const file of files) {
	const text = readFileSync(file, 'utf8');
	for (const { name, re } of RULES) {
		for (const [match] of text.matchAll(re)) {
			if (!ALLOWED.has(match)) alerts.push(`${relative(ROOT, file)}: ${name}`);
		}
	}
	if (denied.length) {
		const lower = text.toLowerCase();
		// Terms are not printed: the build log of a public repository must not repeat them.
		const hits = denied.filter((term) => new RegExp(`(^|[^\\p{L}])${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}($|[^\\p{L}])`, 'u').test(lower));
		if (hits.length) alerts.push(`${relative(ROOT, file)}: ${hits.length} denied term(s)`);
	}
}

if (alerts.length) {
	console.error(`check-public: ${alerts.length} alert(s)\n  ${[...new Set(alerts)].join('\n  ')}`);
	process.exit(1);
}
console.log(`check-public: ${files.length} files, no alert${denied.length ? ` (${denied.length} denied terms)` : ''}`);
