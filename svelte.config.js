import adapter from '@sveltejs/adapter-cloudflare';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Use svelte-preprocess instead of vitePreprocess
    preprocess: sveltePreprocess(),

    kit: {
        adapter: adapter()
    }
};

export default config;