import { defineConfig } from "vitepress"
import { generateSidebar } from "vitepress-sidebar"

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "AM32",
	description: "ESC Firmware for 32bit ARM MCUs",
	srcDir: "docs",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Documentation", link: "/general/docs" }
		],

		sidebar: generateSidebar({
			documentRootPath: "docs",
			capitalizeFirst: true,
			useTitleFromFileHeading: true,
			manualSortFileNameByPriority: [
				"docs.md",
				"general",
				"guides",
				"development",
			],
			excludeFiles: ["markdown-examples.md"]
		}),

		socialLinks: [
			{ icon: "github", link: "https://github.com/am32-firmware/AM32" },
			{ icon: "discord", link: "https://discord.com/invite/h7ddYMmEVV"}
		]
	}
})
