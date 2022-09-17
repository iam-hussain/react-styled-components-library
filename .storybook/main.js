const custom = require("./webpack.config.js")

module.exports = {
    stories: ["../src/components/**/*.stories.mdx", "../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "storybook-dark-mode",
        "@storybook/addon-docs",
    ],
    framework: "@storybook/react",
    core: {
        builder: "webpack5",
    },
}
