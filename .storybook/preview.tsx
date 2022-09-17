import { DecoratorFn } from "@storybook/react"
import { useDarkMode } from "storybook-dark-mode"
import React from "react"
import styled, { css, ThemeProvider } from "styled-components"
import { getTheme, GlobalStyle } from "../src/styles"
import { themes } from "@storybook/theming"

const theme = {
    brandTitle: "React Library",
    colorPrimary: "#0B1F35",
    colorSecondary: "#EF3124",
    fontBase: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Helvetica, sans-serif",
    fontCode: "Monaco, Menlo, monospace",
}
export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    darkMode: {
        // Override the default dark theme
        dark: { ...themes.dark, ...theme },
        // Override the default light theme
        light: { ...themes.normal, ...theme },
        current: "light",
    },
}

const ThemeBlock = styled.div<{ left?: boolean; fill?: boolean }>(
    ({ left, fill, theme }) =>
        css`
            position: absolute;
            top: 0;
            left: ${left || fill ? 0 : "50vw"};
            border-right: ${left ? "1px solid #202020" : "none"};
            right: ${left ? "50vw" : 0};
            width: ${fill ? "100vw" : "50vw"};
            height: 100vh;
            bottom: 0;
            overflow: auto;
            padding: 1rem;
            background: ${theme.color.background};
            /*  {
        left: ${left ? 0 : "50vw"};
        right: ${left ? "50vw" : 0};
        padding: 0 !important;
      } */
        `
)
export const withTheme: DecoratorFn = (StoryFn, context) => {
    // Get values from story parameter first, else fallback to globals
    const theme = context.parameters.lint || context.globals.lint
    const storyTheme = useDarkMode() ? getTheme("dark", theme) : getTheme("light", theme)
    return (
        <ThemeProvider theme={storyTheme}>
            <GlobalStyle />
            <ThemeBlock fill>
                <StoryFn />
            </ThemeBlock>
        </ThemeProvider>
    )
}

export const globalTypes = {
    lint: {
        name: "Lint",
        description: "Global lint for components",
        defaultValue: "red",
        toolbar: {
            // The icon for the toolbar item
            title: "Lint",
            color: "red",
            // Array of options
            items: [
                { value: "red", icon: "circle", color: "red", title: "red" },
                { value: "blue", icon: "circle", color: "blue", title: "blue" },
            ],
            // Property that specifies if the name of the item will be displayed
            name: true,
            dynamicTitle: true,
            dynamicColor: true,
        },
    },
}

export const decorators = [withTheme]
