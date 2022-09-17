import Color from "color"

const lint = {
    dark: {
        red: {
            primary: "#CC3338",
            primary_invert: "#fff",
        },
        blue: {
            primary: "#23A9E1",
            primary_invert: "#fff",
        },
    },
    light: {
        red: {
            primary: "#CC3338",
            primary_invert: "#fff",
        },
        blue: {
            primary: "#23A9E1",
            primary_invert: "#fff",
        },
    },
}

const themeConfig = {
    light: {
        color: {
            primary: "#CC3338",
            primary_invert: "#fff",
            secondary: "#636378",
            secondary_invert: "#fff",
            text: "#000",
            text_light: "#636378",
            text_lighter: "#8C8C8C",
            background: "#fff",
            background_light: "#F2F2F2",
            paper: "#E5E5E8",
            paper_dark: "#CCCCCC",
            error: "#F24B6A",
            warn: "#F2BC1B",
            success: "#8DA632",
            info: "#1C1E9C",
            shadows: "#BFBFBF",
        },
        shadows: [`0px 1px 2px 0 #BFBFBF`, `0 1px 4px 0 #BFBFBF`],
    },
    dark: {
        color: {
            primary: "#CC3338",
            primary_invert: "#E5E5E8",
            secondary: "#23A9E1",
            secondary_invert: "#fff",
            text: "#fff",
            text_light: "#BABABA",
            text_lighter: "#737373",
            background: "#2d2d44",
            background_light: "#3f3f5e",
            paper: "#1e1e2c",
            paper_dark: "#444452",
            error: "#F23D5E",
            warn: "#F2BC1B",
            success: "#447622",
            info: "#1C1E9C",
            shadows: "#1e1e2c",
        },
        shadows: ["none", "none"],
    },
}

const space = [0, "0.25rem", "0.5rem", "1rem", "1.5rem", "2rem", "3rem", "4rem", "8rem", "16rem", "32rem", "48rem", "64rem"]

const fontSizes = {
    text: "1rem",
    label: "1rem",
    input_error: "0.8rem",
    heading: ["1.1rem", "1.3rem", "1.5rem", "1.8rem", "3rem", "4.25rem"].reverse(),
}

const letterSpacings = {
    normal: "normal",
    caps: "0.1em",
}

const lineHeights = [1, 1.125, 1.25, 1.5]

const fontWeight = {
    lightest: 100,
    lighter: 200,
    light: 300,
    normal: 400,
    bold: 500,
    bolder: 600,
    boldest: 700,
}

const fontFamily = ["'Poppins', sans-serif, Arial, Helvetica, sans-serif;"]

type Mode = "dark" | "light"
type Lint = "red" | "blue"

export const getTheme = (modeStr: Mode, lintStr: Lint) => {
    const selectedColor = themeConfig[modeStr] ?? themeConfig.light
    const lintMode = lint[modeStr] ?? lint.light
    const selectedLint = lintMode[lintStr] ?? lintMode.red
    console.log({ selectedLint, modeStr, lintStr })
    const color = { ...selectedColor.color, ...selectedLint }

    return {
        space,
        shadows: selectedColor.shadows,
        font_family: fontFamily,
        font_sizes: fontSizes,
        font_weight: fontWeight,
        line_heights: lineHeights,
        letter_spacings: letterSpacings,
        transition: [" 0.2s ease-out"],
        border_radius: "3px",
        color: {
            ...color,
            primary_lighter: Color(color.primary).lighten(0.2).hex(),
            primary_light: Color(color.primary).lighten(0.05).hex(),
            primary_dark: Color(color.primary).darken(0.2).hex(),
            primary_darker: Color(color.primary).darken(0.4).hex(),
            secondary_lighter: Color(color.secondary).lighten(0.5).hex(),
            secondary_light: Color(color.secondary).lighten(0.1).hex(),
            secondary_dark: Color(color.secondary).darken(0.1).hex(),
            secondary_darker: Color(color.secondary).darken(0.2).hex(),
            error_dark: Color(color.error).darken(0.2).hex(),
            error_light: Color(color.error).lighten(0.2).hex(),
            error_lighter: Color(color.error).lighten(0.4).hex(),
        },
    }
}
