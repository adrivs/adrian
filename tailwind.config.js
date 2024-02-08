/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'silver-chalice': {
					50: '#f7f7f7',
					100: '#ededed',
					200: '#dfdfdf',
					300: '#c8c8c8',
					400: '#aaaaaa',
					500: '#999999',
					600: '#888888',
					700: '#7b7b7b',
					800: '#676767',
					900: '#545454',
					950: '#363636'
				}
			}
		}
	},
	darkMode: "class",
	plugins: []
}
