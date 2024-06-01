import js from "@eslint/js"
import markdownPlugin from "eslint-plugin-markdownlint"
import markdownParser from "eslint-plugin-markdownlint/parser.js"

export default [
	js.configs.recommended,
	{
		ignores: ["node_modules/", ".env*", "pnpm-lock.yaml", "package-lock.json", "yarn.lock", ".vitepress/cache/"],
		plugins: {
			markdownlint: markdownPlugin,
		},
		rules: {
			...markdownPlugin.configs.recommended.rules,
		},
		languageOptions: {
			parser: markdownParser,
		},
		files: ["**/*.md"]
	},
]
