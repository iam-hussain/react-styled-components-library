import { DecoratorFn } from "@storybook/react"
import { useDarkMode } from "storybook-dark-mode"
import React from "react"
import styled, { css, ThemeProvider } from "styled-components"
import { themes, GlobalStyle } from "../src/styles"
import { themes as storyBookThemes } from "@storybook/theming"

const storyBookData = {
    brandTitle: "React Library",
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
        dark: { ...storyBookThemes.dark, ...storyBookData },
        // Override the default light theme
        light: { ...storyBookThemes.normal, ...storyBookData },
        current: "light",
    },
}

const ThemeBlock = styled.div(
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
            background: ${theme.appBg};
            /*  {
        left: ${left ? 0 : "50vw"};
        right: ${left ? "50vw" : 0};
        padding: 0 !important;
      } */
        `
)
export const withTheme = (StoryFn, context) => {
    // Get values from story parameter first, else fallback to globals
    const themeSelected = context.parameters.lint || context.globals.lint
    const storyTheme = themes[themeSelected] ?? themes.light
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
        defaultValue: "light",
        toolbar: {
            title: "Lint",
            color: "red",
            items: [
                { value: "light", title: "Light/Theme" },
                { value: "dark", title: "Dark/Theme" },
            ],
            name: true,
            dynamicTitle: true,
        },
    },
}

export const decorators = [withTheme]
