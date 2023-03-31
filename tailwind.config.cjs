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
		},
	},
	plugins: [],
};
