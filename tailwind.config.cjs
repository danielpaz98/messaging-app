/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				DMsans: "'DM Sans', sans-serif",
			},
		},
	},
	plugins: [],
};
