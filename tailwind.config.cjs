module.exports = {
	darkMode: "class",
	content: ["./docs/**/*.md", "./.vitepress/**/*.vue"],
	theme: {
		extend: {
			screens: {
				"vp-960": "960px",
			},
			colors: {
				primary: {
				"50": "#fee9ec",
				"100": "#fdd3da",
				"200": "#fba8b4",
				"300": "#f87c8f",
				"400": "#f65169",
				"500": "#f42544",
				"600": "#c31e36",
				"700": "#921629",
				"800": "#620f1b",
				"900": "#31070e"
				}
			},
		}
	}
}
