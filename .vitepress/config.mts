import { defineConfig } from "vitepress"
import { generateSidebar } from "vitepress-sidebar"
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs"

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "AM32",
	description: "ESC Firmware for 32bit ARM MCUs",
	srcDir: "docs",
	lastUpdated: true,
	head: [
		["link", { rel: "icon", href: "/favicon.svg" }]
	],
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Documentation", link: "/general/docs" }
		],
		logo: {
			light: "/am32-logo-dark.svg",
			dark: "/am32-logo-white.svg"
		},
		siteTitle: false,
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
			{ icon: "discord", link: "https://discord.com/invite/h7ddYMmEVV" }
		],

		search: {
			provider: "local"
		},

		editLink: {
			pattern: "https://github.com/am32-firmware/am32-wiki/edit/main/docs/:path",
		}
	},
	vite: {
		server: {
			port: 8000
		}
	},
	markdown: {
		config(md) {
			md.use(tabsMarkdownPlugin)
		}
	}
})
