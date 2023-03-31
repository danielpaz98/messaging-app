/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				DMsans: "'DM Sans', sans-serif",
			},
			screens: {
				xs: "320px",
				mobile: "500px",
			},
			colors: {
				background: "#131517",
				whisper: "#e9e9e9",
				mischka: "#b4b5b7",
				emerald: "#41d37e",
				comet: "#5f6388",
				"sea-green": "#258c60",
				"neon-blue": "#5051f9",
				"echo-blue": "#9babc5",
				"slate-gray": "#6b7c93",
				"light-gray": "#d2d2d2",
				"gray-chateau": "#a9abad",
				"link-water": "#c2c7d0",
				"bali-hai": "#8899a8",
				"persian-red": "#d34141",
				"black-pearl": "#131517",
				jaguar: "#282932",
				"black-russian": {
					1: "#1e1f25",
					2: "#212229",
				},
			},
		},
	},
	plugins: [],
};
