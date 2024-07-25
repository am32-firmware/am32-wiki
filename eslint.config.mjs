import js from "@eslint/js"
import markdownPlugin from "eslint-plugin-markdownlint"
import markdownParser from "eslint-plugin-markdownlint/parser.js"

export default [
	js.configs.recommended,
	{ignores: ["node_modules/", ".env*", "pnpm-lock.yaml", "package-lock.json", "yarn.lock", ".vitepress/cache/", ".vitepress/dist/"]},
	{
		plugins: {
			markdownlint: markdownPlugin,
		},
		rules: {
			...markdownPlugin.configs.recommended.rules,
			"markdownlint/md013": "off", // long lines
			"markdownlint/md024": "warn", // multiple headers with the same content
			"markdownlint/md028": "off", // blank line inside blockquote // fixes github-style admonitions
			"markdownlint/md029": "warn", // ordered list item prefix
			"markdownlint/md033": "off", // inline html
			"markdownlint/md036": "off", // emphasis used instead of a header
		},
		languageOptions: {
			parser: markdownParser,
		},
		files: ["**/*.md"]
	},
]
