import styled, { css } from "styled-components"

export interface StyledButtonProps {
    color?: "primary" | "secondary" | "tertiary" | "caution" | "solid" | "ghost"
    size?: "small" | "regular" | "large"
    fullWidth?: boolean
    selected?: boolean
}

export const StyledButton = styled.button.attrs(
    (props: StyledButtonProps): StyledButtonProps => ({
        size: props.size || "regular",
        color: props.color || "primary",
        fullWidth: props.fullWidth || true,
        selected: props.selected || false,
    })
)`
    display: block;
    padding: 0 ${(props) => props.theme.space[3]};
    margin: ${(props) => props.theme.space[2]} 0;
    border-radius: ${(props) => props.theme.border_radius};
    font-size: ${(props) => props.theme.font_sizes.text};
    font-weight: ${(props) => props.theme.font_weight.normal};
    line-height: ${(props) => props.theme.line_heights[1]};
    transition: ${(props) => props.theme.transition[0]};
    box-shadow: ${(props) => props.theme.shadows[0]};
    cursor: pointer;
    user-select: none;
    height: 40px;
    width: ${(props) => (props.fullWidth ? "100%" : "auto")};
    max-width: ${(props) => props.theme.space[9]};
    word-break: keep-all;
    white-space: nowrap;
    letter-spacing: ${(props) => props.theme.letter_spacings.caps};

    ${({ color: mode, selected, theme: { color } }) =>
        mode === "primary" &&
        css`
            color: ${color.primary_invert};
            background-color: ${selected ? color.primary_dark : color.primary};
            border: 2px solid ${color.primary};
            outline: 1px solid ${color.primary};

            &:hover {
                background-color: ${color.primary_dark};
                border: 2px solid ${color.primary_dark};
            }

            &:active {
                background-color: ${color.primary_darker};
                border: 2px solid ${color.primary_darker};
            }

            &:focus {
                border: 2px solid ${color.primary_darker};
            }

            &:focus-visible {
                outline: 0px solid ${color.primary_darker};
            }

            &:disabled {
                border: 2px solid ${color.primary_lighter};
                background-color: ${color.primary_lighter};
            }
        `}

    ${({ color: mode, selected, theme: { color } }) =>
        mode === "secondary" &&
        css`
            color: ${color.secondary_invert};
            background-color: ${selected ? color.secondary_dark : color.secondary};
            border: 2px solid ${color.secondary};
            outline: 1px solid ${color.secondary};

            &:hover {
                background-color: ${color.secondary_dark};
                border: 2px solid ${color.secondary_dark};
            }

            &:active {
                background-color: ${color.secondary_darker};
                border: 2px solid ${color.secondary_darker};
            }

            &:focus {
                border: 2px solid ${color.secondary_darker};
            }

            &:focus-visible {
                outline: 0px solid ${color.secondary_darker};
            }

            &:disabled {
                border: 2px solid ${color.secondary_lighter};
                background-color: ${color.secondary_lighter};
            }
        `}
`
