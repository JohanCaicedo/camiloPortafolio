/** @type {import('tailwindcss').Config} */
// tailwind.config.js

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
	  extend: {
		fontFamily: {
		  NotoSerif: ['Noto Serif Variable'],
		  SourceSans: ['Source Sans Pro', 'sans-serif'],
		  Merriweather: ['Merriweather Sans Variable', 'sans-serif'], // ¡Añadido 'sans-serif' aquí!
		},
		colors: {
		  customPurple: '#6a5deb',
		},
	  },
	},
	plugins: [require('daisyui')],
  };
  