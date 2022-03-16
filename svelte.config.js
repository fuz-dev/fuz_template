import {typescript} from 'svelte-preprocess-esbuild';
import static_adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV !== 'production';

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: typescript(),
	compilerOptions: {
		immutable: true,
	},
	kit: {
		adapter: static_adapter(),
		paths: dev ? undefined : {base: '/felt-template'}, // for GitHub pages -- delete this line for top-level domains
		files: {assets: 'src/static'},
		prerender: {default: true},
		vite: {
			ssr: {
				noExternal: ['@feltcoop/felt'],
			},
		},
	},
};
