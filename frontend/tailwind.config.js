/* eslint-disable no-undef */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html", "./views/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	mode: "jit",
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			'primary2': "#0bbf64",
			'primary-hover': "#047E41",
			'secondary': "#3F3D56",
			'secondary-hover': "#1F1F29",
			'tertiary': "#D7F5E6",
			transparent: 'transparent',
			black: '#000',
			white: '#fff',
			gray: {
				50: "#f9fafb",
				100: '#f7fafc',
				200: "#e5e7eb",
				300: "#d1d5db",
				400: "#9ca3af",
				500: "#6b7280",
				600: "#4b5563",
				700: "#374151",
				800: "#1f2937",
				900: '#1a202c',
			},
			red: {
				50: "#fef2f2",
				100: '#fee2e2',
				200: "#fecaca",
				300: "#fca5a5",
				400: "#f87171",
				500: "#ef4444",
				600: "#dc2626",
				700: "#b91c1c",
				800: "#991b1b",
				900: '#7f1d1d',
			},
			'blue': '#1fb6ff',
			'purple': '#7e5bef',
			'pink': '#ff49db',
			'orange': '#ff7849',
			'green': '#13ce66',
			'yellow': '#ffc82c',
			'gray-dark': '#273444',
			'gray-light': '#d3dce6',
		},
		fontFamily: {
			display: ["Poppins", "sans-serif"],
			body: ["Poppins", "sans-serif"],
		},
		extend: {
			pacing: {
				'128': '32rem',
				'144': '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
			screens: {
				mf: "990px",
			},
			keyframes: {
				"slide-in": {
					"0%": {
						"-webkit-transform": "translateX(120%)",
						transform: "translateX(120%)",
					},
					"100%": {
						"-webkit-transform": "translateX(0%)",
						transform: "translateX(0%)",
					},
				},
			},
			animation: {
				"slide-in": "slide-in 0.5s ease-out",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require('tailwindcss-animated'),
		require("tw-elements/dist/plugin.cjs"),
		require('flowbite/plugin')
	],
});
