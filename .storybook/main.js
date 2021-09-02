module.exports = {
  "stories": [
    "../packages/**/*.stories.mdx",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-jest",
    "@washingtonpost/storybook-addon-web-vitals",
    "@storybook/addon-storysource"
  ]
}