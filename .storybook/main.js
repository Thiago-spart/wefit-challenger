const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/story.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
		"storybook-addon-next"
  ],
  "framework": "@storybook/react",
	"core": {
    builder: "webpack5"
  }
}
