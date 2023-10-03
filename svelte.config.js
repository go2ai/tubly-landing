import adapter from "svelte-kit-sst";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { imagetools } from 'vite-imagetools'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
	target: '#svelte',
	plugins: [imagetools()],
  kit: {
    adapter: adapter(),
    alias: {
			components: './src/components',
			stores: './src/stores',
			utils: './src/utils',
			api: './src/api',
			webSocket: './src/webSocket',
			types: './src/types',
			services: './src/services',
			locale: './src/locale',
		},
  },
};

export default config;
