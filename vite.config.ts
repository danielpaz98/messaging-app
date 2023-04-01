import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		eslint(),
		svgr({
			svgrOptions: {
				dimensions: false,
				svgProps: {
					fill: "currentColor",
					className: "pointer-events-none",
				},
			},
		}),
	],
	resolve: {
		alias: [{ find: "~/", replacement: "/src/" }],
	},
});
