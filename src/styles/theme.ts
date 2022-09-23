export interface ThemeVars {
    base: "light" | "dark"

    colorPrimary: string
    colorPrimaryInverse: string
    colorPrimaryDark: string
    colorPrimaryLight: string

    colorSecondary: string
    colorSecondaryInverse: string
    colorSecondaryDark: string
    colorSecondaryLight: string

    colorTertiary: string
    colorTertiaryInverse: string
    colorTertiaryDark: string
    colorTertiaryLight: string

    defaultShadow: string
    primaryShadow: string
    focusShadow: string
    disabledColor: string
    disabledTextColor: string
    colorFocus: string

    colorDanger: string
    colorDangerInverse: string
    colorDangerDark: string
    colorDangerLight: string
    appBg: string
    appContentBg: string
    appBorderColor: string
    appBorderRadius: number
    fontBase: string
    fontCode: string
    textColor: string
    textInverseColor: string
    textMutedColor: string
    barTextColor: string
    barSelectedColor: string
    barBg: string
    inputBg: string
    inputBorder: string
    inputTextColor: string
    labelColor: string
    borderRadius: string
    letterSpace: string
    letterSpaceCaps: string
    lineHeight: number[]
    fontSize: string
    fontSizeSmall: string
    fontSizeLabel: string
    fontSizeHeading: string[]
    space: string[]
    transition: string[]
    weight: {
        regular: number
        bold: number
        bolder: number
        black: number
    }
}

const lightSyntaxColors = {
    green1: "#008000",
    red1: "#A31515",
    red2: "#9a050f",
    red3: "#800000",
    red4: "#ff0000",
    gray1: "#393A34",
    cyan1: "#36acaa",
    cyan2: "#2B91AF",
    blue1: "#0000ff",
    blue2: "#00009f",
}
const darkSyntaxColors = {
    green1: "#7C7C7C",
    red1: "#92C379",
    red2: "#9a050f",
    red3: "#A8FF60",
    red4: "#96CBFE",
    gray1: "#EDEDED",
    cyan1: "#C6C5FE",
    cyan2: "#FFFFB6",
    blue1: "#B474DD",
    blue2: "#00009f",
}

const color = {
    // Official color palette
    primary: "#FF4785",
    secondary: "#1EA7FD",
    tertiary: "#FAFBFC",
    ancillary: "#22a699",
    // Complimentary
    orange: "#FC521F",
    gold: "#FFAE00",
    green: "#66BF3C",
    seafoam: "#37D5D3",
    purple: "#6F2CAC",
    ultraviolet: "#2A0481",
    // Monochrome
    lightest: "#FFFFFF",
    lighter: "#F8F8F8",
    light: "#F3F3F3",
    mediumLight: "#EEEEEE",
    medium: "#DDDDDD",
    mediumDark: "#999999",
    dark: "#666666",
    darker: "#444444",
    darkest: "#333333",
    // For borders
    border: "rgba(0,0,0,.1)",
    // Status
    positive: "#66BF3C",
    negative: "#FF4400",
    negativeDark: "#e63d00",
    negativeLight: "#ff571a",
    warning: "#E69D00",
    critical: "#FFFFFF",
    defaultText: "#333333",
    inverseText: "#FFFFFF",
}
const background = {
    app: "#F6F9FC",
    bar: "#FFFFFF",
    content: color.lightest,
    positive: "#E1FFD4",
    negative: "#FEDED2",
    warning: "#FFF5CF",
    critical: "#FF4400",
}
const typography = {
    fonts: {
        base: [
            '"Nunito Sans"',
            "-apple-system",
            '".SFNSText-Regular"',
            '"San Francisco"',
            "BlinkMacSystemFont",
            '"Segoe UI"',
            '"Helvetica Neue"',
            "Helvetica",
            "Arial",
            "sans-serif",
        ].join(", "),
        mono: [
            "ui-monospace",
            "Menlo",
            "Monaco",
            '"Roboto Mono"',
            '"Oxygen Mono"',
            '"Ubuntu Monospace"',
            '"Source Code Pro"',
            '"Droid Sans Mono"',
            '"Courier New"',
            "monospace",
        ].join(", "),
    },
    weight: {
        regular: 400,
        bold: 600,
        bolder: 700,
        black: 900,
    },
}

const common = {
    transition: ["0.2s ease-out"],
    borderRadius: "4px",
    letterSpace: "normal",
    letterSpaceCaps: "0.1em",
    lineHeight: [1, 1.125, 1.25, 1.5],
    fontSize: "1rem",
    fontSizeSmall: "0.8rem",
    fontSizeLabel: "0.8rem",
    fontSizeHeading: ["1.1rem", "1.3rem", "1.5rem", "1.8rem", "3rem", "4.25rem"].reverse(),
    space: [
        "0",
        "0.25rem",
        "0.5rem",
        "0.75rem",
        "1rem",
        "1.25rem",
        "1.5rem",
        "2rem",
        "3rem",
        "4rem",
        "8rem",
        "16rem",
        "32rem",
        "48rem",
        "64rem",
    ],
    weight: typography.weight,
}

const light: ThemeVars = {
    ...common,
    base: "light",

    colorPrimary: "#FFB30D",
    colorPrimaryInverse: color.lightest,
    colorPrimaryDark: "#f3a600",
    colorPrimaryLight: "#ffbb27",

    colorSecondary: "#1BA0B3",
    colorSecondaryInverse: color.lightest,
    colorSecondaryDark: "#188c9d",
    colorSecondaryLight: "#1eb4c9",

    colorTertiary: "#747E7E",
    colorTertiaryInverse: color.lightest,
    colorTertiaryDark: "#5c6363",
    colorTertiaryLight: "#8e9797",

    colorFocus: "#0d59ff",
    disabledColor: "#e1e5e9",
    disabledTextColor: "#b4bec9",

    colorDanger: color.negative,
    colorDangerInverse: color.lightest,
    colorDangerDark: color.negativeDark,
    colorDangerLight: color.negativeLight,

    defaultShadow: "#0000002a -2px 2px 6px 1px",
    primaryShadow: "#ff47852e 1px 1px 2px 1px",
    focusShadow: "#1EA7FD2e 1px 1px 2px 1px",

    appBg: background.app,
    appContentBg: color.lightest,
    appBorderColor: color.border,
    appBorderRadius: 4,

    fontBase: typography.fonts.base,
    fontCode: typography.fonts.mono,

    textColor: color.darkest,
    textInverseColor: color.lightest,
    textMutedColor: color.dark,

    barTextColor: color.mediumDark,
    barSelectedColor: color.secondary,
    barBg: color.lightest,

    inputBg: color.light,
    inputBorder: "#CACACA",
    inputTextColor: color.darkest,
    labelColor: "#3f3f3f",
}

const dark: ThemeVars = {
    ...common,
    base: "dark",
    colorPrimary: "#FFB30D",
    colorPrimaryInverse: color.darker,
    colorPrimaryDark: "#f3a600",
    colorPrimaryLight: "#ffbb27",

    colorSecondary: "#1AE3FF",
    colorSecondaryInverse: color.lightest,
    colorSecondaryDark: "#00cae6",
    colorSecondaryLight: "#67ecff",

    colorTertiary: "#c3cbd4",
    colorTertiaryInverse: "#3a3c3f",
    colorTertiaryDark: "#afb6be",
    colorTertiaryLight: "#cfd5dc",

    colorFocus: "#0d59ff",
    disabledColor: "#36393c",
    disabledTextColor: "#5a5f64",

    colorDanger: color.negative,
    colorDangerInverse: color.lightest,
    colorDangerDark: color.negativeDark,
    colorDangerLight: color.negativeLight,

    defaultShadow: "#ffffff2a -2px 2px 6px 1px",
    primaryShadow: "#ff47852e 1px 1px 2px 1px",
    focusShadow: "#1EA7FD2e 1px 1px 2px 1px",
    appBg: "#2f2f2f",
    appContentBg: color.darkest,
    appBorderColor: "rgba(255,255,255,.1)",
    appBorderRadius: 4,
    fontBase: typography.fonts.base,
    fontCode: typography.fonts.mono,

    textColor: color.lightest,
    textInverseColor: color.darkest,
    textMutedColor: color.mediumDark,

    barTextColor: "#999999",
    barSelectedColor: color.secondary,
    barBg: color.darkest,
    inputBg: "#3f3f3f",
    inputBorder: "#878787",
    inputTextColor: color.lightest,
    labelColor: "#CACACA",
}

export const themes = {
    dark,
    light,
}
