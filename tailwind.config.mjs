/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				NotoSerif: ['Noto Serif Variable'],
			},
			colors: {
				customPurple: '#6a5deb',
			},
		},
	},
	plugins: [],
}
