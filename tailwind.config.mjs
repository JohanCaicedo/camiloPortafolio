/** @type {import('tailwindcss').Config} */
// tailwind.config.js

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	safelist: [
		'bg-[#eea284]/60',
		'dark:bg-[#eea284]/10',
		'bg-[#bbc9d8]/60',
		'dark:bg-[#bbc9d8]/10',
		'bg-[#f7df91]/60',
		'dark:bg-[#f7df91]/10',
		'bg-[#c4debc]/60',
		'dark:bg-[#c4debc]/10',
		'bg-[#f2d3c5]/60',
		'dark:bg-[#f2d3c5]/10',
	],
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
	plugins: [],
  };
  