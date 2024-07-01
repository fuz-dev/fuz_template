// generated by src/routes/package.gen.ts

import type {Package_Json} from '@ryanatkn/gro/package_json.js';
import type {Src_Json} from '@ryanatkn/gro/src_json.js';

export const package_json = {
	name: '@ryanatkn/fuz_template',
	version: '0.0.1',
	description:
		'a static web app and Node library template with TypeScript, Svelte, SvelteKit, Vite, esbuild, Fuz, and Gro',
	glyph: '❄',
	logo: 'logo.svg',
	logo_alt: 'a friendly pixelated spider facing you',
	public: true,
	homepage: 'https://template.fuz.dev/',
	repository: 'https://github.com/ryanatkn/fuz_template',
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		test: 'gro test',
		deploy: 'gro deploy',
	},
	type: 'module',
	engines: {node: '>=20.12'},
	devDependencies: {
		'@ryanatkn/belt': '^0.23.0',
		'@ryanatkn/eslint-config': '^0.1.3',
		'@ryanatkn/fuz': '^0.105.2',
		'@ryanatkn/gro': '^0.126.0',
		'@ryanatkn/moss': '^0.6.2',
		'@sveltejs/adapter-static': '^3.0.2',
		'@sveltejs/kit': '^2.5.17',
		'@sveltejs/vite-plugin-svelte': '^3.1.1',
		'@typescript-eslint/eslint-plugin': '^7.14.1',
		'@typescript-eslint/parser': '^7.14.1',
		eslint: '^8.57.0',
		'eslint-plugin-svelte': '^2.41.0',
		prettier: '^3.3.2',
		'prettier-plugin-svelte': '^3.2.5',
		svelte: '^5.0.0-next.165',
		'svelte-check': '^3.8.2',
		tslib: '^2.6.3',
		typescript: '^5.5.2',
		uvu: '^0.5.6',
	},
	eslintConfig: {root: true, extends: '@ryanatkn'},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	sideEffects: ['**/*.css'],
	files: ['dist'],
} satisfies Package_Json;

export const src_json = {name: '@ryanatkn/fuz_template', version: '0.0.1'} satisfies Src_Json;

// generated by src/routes/package.gen.ts
