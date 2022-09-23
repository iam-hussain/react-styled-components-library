import styled, { css } from "styled-components"

export interface TypographyProps {
    italic?: boolean
    uppercase?: boolean
    noTopMargin?: boolean
    noMargin?: boolean
    borderBottom?: boolean
    fontCode?: boolean
    color?:
        | "primary"
        | "secondary"
        | "tertiary"
        | "primaryInverse"
        | "secondaryInverse"
        | "tertiaryInverse"
        | "text"
        | "textInverse"
        | "textMuted"
        | "danger"
        | "disabled"
    weight?: "regular" | "bold" | "bolder" | "black"
    align?: "center" | "left" | "right"
}

const TypographyAttributeHandler = (props: TypographyProps): TypographyProps => ({
    italic: props.italic || false,
    uppercase: props.uppercase || false,
    noTopMargin: props.noTopMargin || false,
    borderBottom: props.borderBottom || false,
    fontCode: props.fontCode || false,
    color: props.color || "text",
    align: props.align || "left",
})

const Common = css<TypographyProps>`
    height: auto;
    width: 100%;
    padding: 0;
    user-select: none;
    font-family: ${(props) => (props.fontCode ? props.theme.fontCode : props.theme.fontBase)};
    font-style: ${(props) => (props.italic ? "italic" : "bold")};
    font-weight: ${(props) => props.theme.weight[props?.weight || "regular"]};
    text-align: ${(props) => props.align || "left"};
    text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
    letter-spacing: ${({ theme, uppercase }) => (uppercase ? theme.letterSpaceCaps : theme.letterSpace)};
    transition: ${(props) => props.theme.transition[0]};

    ${({ color, theme }) =>
        color === "primary" &&
        css`
            color: ${theme.colorPrimary};
        `}

    ${({ color, theme }) =>
        color === "primaryInverse" &&
        css`
            color: ${theme.colorPrimaryInverse};
        `}

    ${({ color, theme }) =>
        color === "secondary" &&
        css`
            color: ${theme.colorSecondary};
        `}

    ${({ color, theme }) =>
        color === "secondaryInverse" &&
        css`
            color: ${theme.colorSecondaryInverse};
        `}

    ${({ color, theme }) =>
        color === "tertiary" &&
        css`
            color: ${theme.colorTertiary};
        `}

    ${({ color, theme }) =>
        color === "tertiaryInverse" &&
        css`
            color: ${theme.colorTertiaryInverse};
        `}

    ${({ color, theme }) =>
        color === "text" &&
        css`
            color: ${theme.textColor};
        `}


  ${({ color, theme }) =>
        color === "textInverse" &&
        css`
            color: ${theme.textInverseColor};
        `}


    ${({ color, theme }) =>
        color === "textMuted" &&
        css`
            color: ${theme.textMutedColor};
        `}


    ${({ color, theme }) =>
        color === "danger" &&
        css`
            color: ${theme.colorDanger};
        `}

    ${({ color, theme }) =>
        color === "disabled" &&
        css`
            color: ${theme.disabledTextColor};
        `}
`

const CommonOverwrite = css<TypographyProps>`
    ${({ borderBottom, theme }) =>
        borderBottom &&
        css`
            border-bottom: 2px solid;
            padding-bottom: ${theme.space[3]};
            margin-bottom: ${theme.space[5]};
            border-color: ${theme.inputBorder};
        `}

    ${({ noMargin }) =>
        noMargin &&
        css`
            margin: 0 !important;
        `}
`

export const Text = styled.p.attrs(TypographyAttributeHandler)`
    ${Common}
    font-size: ${(props) => props.theme.fontSize};
    line-height: ${(props) => props.theme.lineHeight[0]};
    margin: 0;
    margin-bottom: ${(props) => props.theme.space[2]};
    ${CommonOverwrite}
`

export const TextSmall = styled.p.attrs(TypographyAttributeHandler)`
    ${Common}
    font-size: ${(props) => props.theme.fontSizeSmall};
    line-height: ${(props) => props.theme.lineHeight[0]};
    margin: 0;
    margin-bottom: ${(props) => props.theme.space[1]};
    ${CommonOverwrite}
`

export const H6 = styled.h6.attrs(TypographyAttributeHandler)`
    ${Common}
    font-size: ${(props) => props.theme.fontSizeHeading[5]};
    line-height: ${(props) => props.theme.lineHeight[2]};
    margin: ${(props) => props.theme.space[2]} 0;
    margin-top: ${(props) => (props.noTopMargin ? 0 : props.theme.space[4])};
    font-weight: ${(props) => props.theme.weight[props?.weight || "bold"]};
    ${CommonOverwrite}
`

export const H5 = styled.h5.attrs(TypographyAttributeHandler)`
    ${Common}
    font-size: ${(props) => props.theme.fontSizeHeading[4]};
    line-height: ${(props) => props.theme.lineHeight[2]};
    margin: ${(props) => props.theme.space[2]} 0;
    margin-top: ${(props) => (props.noTopMargin ? 0 : props.theme.space[4])};
    font-weight: ${(props) => props.theme.weight[props?.weight || "bold"]};
    ${CommonOverwrite}
`

export const H4 = styled.h4.attrs(TypographyAttributeHandler)`
    ${Common}
    font-size: ${(props) => props.theme.fontSizeHeading[3]};
    line-height: ${(props) => props.theme.lineHeight[2]};
    margin: ${(props) => props.theme.space[2]} 0;
    margin-top: ${(props) => (props.noTopMargin ? 0 : props.theme.space[4])};
    font-weight: ${(props) => props.theme.weight[props?.weight || "bold"]};
    ${CommonOverwrite}
`

export const H3 = styled.h3.attrs(TypographyAttributeHandler)`
    ${Common}
    font-size: ${(props) => props.theme.fontSizeHeading[2]};
    line-height: ${(props) => props.theme.lineHeight[2]};
    margin: ${(props) => props.theme.space[2]} 0;
    margin-top: ${(props) => (props.noTopMargin ? 0 : props.theme.space[4])};
    font-weight: ${(props) => props.theme.weight[props?.weight || "bold"]};
    ${CommonOverwrite}
`

export const H2 = styled.h2.attrs(TypographyAttributeHandler)`
    ${Common}
    font-size: ${(props) => props.theme.fontSizeHeading[1]};
    line-height: ${(props) => props.theme.lineHeight[2]};
    margin: ${(props) => props.theme.space[2]} 0;
    margin-top: ${(props) => (props.noTopMargin ? 0 : props.theme.space[4])};
    font-weight: ${(props) => props.theme.weight[props?.weight || "bold"]};
    ${CommonOverwrite}
`

export const H1 = styled.h1.attrs(TypographyAttributeHandler)`
    ${Common}
    font-size: ${(props) => props.theme.fontSizeHeading[0]};
    line-height: ${(props) => props.theme.lineHeight[2]};
    margin: ${(props) => props.theme.space[2]} 0;
    margin-top: ${(props) => (props.noTopMargin ? 0 : props.theme.space[4])};
    font-weight: ${(props) => props.theme.weight[props?.weight || "bold"]};
    ${CommonOverwrite}
`

interface TypographyElementProps extends TypographyProps {
    text: string
}

export function TypographyElement({ text, ...args }: TypographyElementProps) {
    return (
        <>
            <TextSmall {...args}>{text}</TextSmall>
            <Text {...args}>{text}</Text>
            <H6 {...args}>{text}</H6>
            <H5 {...args}>{text}</H5>
            <H4 {...args}>{text}</H4>
            <H3 {...args}>{text}</H3>
            <H2 {...args}>{text}</H2>
            <H1 {...args}>{text}</H1>
        </>
    )
}
