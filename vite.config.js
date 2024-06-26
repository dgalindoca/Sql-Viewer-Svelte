import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		'process.env': process.env,
	  }
});
