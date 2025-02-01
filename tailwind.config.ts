import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				freightText: ['"freight-text-pro"', 'sans-serif'],
				proximaNova: ['"proxima-nova"', 'sans-serif']
			}
		}
	},

	plugins: []
} satisfies Config;
