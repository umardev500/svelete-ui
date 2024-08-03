import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, 'src/components'),
			'@typed': path.resolve(__dirname, 'src/types')
		}
	}
});
