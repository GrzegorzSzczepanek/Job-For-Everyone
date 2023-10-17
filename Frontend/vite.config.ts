import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	css: {
        preprocessorOptions: {
            scss: {                                 
                additionalData: `
                @use '$lib/scss/global' as *;
            `,
            },
        },
    },
	plugins: [sveltekit()]
});
