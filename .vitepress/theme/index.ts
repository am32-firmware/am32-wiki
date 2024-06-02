// https://vitepress.dev/guide/custom-theme
import { h } from "vue"
import type { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"
import FancyTheme from "./Theme.vue"

import "./style.css"
import "./tailwind.postcss"

export default {
	extends: DefaultTheme,
	Layout: FancyTheme,
	enhanceApp({ app, router, siteData }) {
		// ...
	}
} satisfies Theme
