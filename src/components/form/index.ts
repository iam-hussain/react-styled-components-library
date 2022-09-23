import styled, { css } from "styled-components"

export type LabelMode = "default" | "disabled"

export interface LabelProps {
    hasError?: boolean
    disabled?: boolean
}

export const Label = styled.label<LabelProps>`
    padding: 0;
    user-select: none;
    font-family: ${(props) => props.theme.fontBase};
    font-weight: ${(props) => props.theme.weight.bold};
    text-align: "left";
    letter-spacing: ${({ theme }) => theme.letterSpace};
    transition: ${(props) => props.theme.transition[0]};
    font-size: ${(props) => props.theme.fontSizeLabel};
    line-height: ${(props) => props.theme.lineHeight[0]};
    margin: 0;
    margin-bottom: ${(props) => props.theme.space[1]};
    color: ${(props) => props.theme.labelColor};

    ${({ disabled }) =>
        disabled &&
        css`
            color: ${(props) => props.theme.disabledTextColor};
        `}
`

export const InputMessage = styled.label<LabelProps>`
    padding: 0;
    user-select: none;
    font-family: ${(props) => props.theme.fontBase};
    font-weight: ${(props) => props.theme.weight.regular};
    text-align: "left";
    letter-spacing: ${({ theme }) => theme.letterSpace};
    transition: ${(props) => props.theme.transition[0]};
    font-size: ${(props) => props.theme.fontSizeLabel};
    line-height: ${(props) => props.theme.lineHeight[0]};
    margin: 0;
    margin-top: ${(props) => props.theme.space[1]};
    color: ${(props) => (props.hasError ? props.theme.colorDanger : props.theme.labelColor)};
    position: absolute;
    bottom: -16px;

    ${({ disabled }) =>
        disabled &&
        css`
            color: ${(props) => props.theme.disabledTextColor};
        `}
`
