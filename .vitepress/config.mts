import { defineConfig } from "vitepress"
import { generateSidebar } from "vitepress-sidebar"

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "AM32 Docs",
	description: "Documentation for AM32 ESC Firmware",
	srcDir: "docs",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Examples", link: "/markdown-examples" }
		],

		sidebar: generateSidebar({
			documentRootPath: "docs",
			capitalizeFirst: true,
			useTitleFromFileHeading: true,
			manualSortFileNameByPriority: [
				"general",
				"guides",
				"development",
			],
			excludeFiles: ["markdown-examples.md"]
		}),

		socialLinks: [
			{ icon: "github", link: "https://github.com/vuejs/vitepress" }
		]
	}
})
