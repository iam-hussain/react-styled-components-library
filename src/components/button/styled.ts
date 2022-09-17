import styled, { css } from "styled-components"

export interface StyledButtonProps {
    type?: "primary" | "secondary" | "lined" | "caution" | "linked"
    size?: "small" | "regular" | "large"
    fullWidth?: boolean
    selected?: boolean
}

export const StyledButton = styled.button.attrs(
    (props: StyledButtonProps): StyledButtonProps => ({
        size: props.size || "regular",
        type: props.type || "primary",
        fullWidth: props.fullWidth || true,
        selected: props.selected || false,
    })
)`
    display: block;
    cursor: pointer;
    user-select: none;
    height: 40px;
    padding: 0 ${(props) => props.theme.space[3]};
    margin: ${(props) => props.theme.space[2]} 0;
    border-radius: ${(props) => props.theme.borderRadius};
    font-size: ${(props) => props.theme.fontSize};
    font-weight: ${(props) => props.theme.weight.regular};
    line-height: ${(props) => props.theme.lineHeight[1]};
    transition: ${(props) => props.theme.transition[0]};
    width: ${(props) => (props.fullWidth ? "100%" : "auto")};
    max-width: ${(props) => props.theme.space[9]};
    word-break: keep-all;
    white-space: nowrap;
    letter-spacing: ${(props) => props.theme.letterSpaceCaps};

    ${({ type, selected, theme }) =>
        type === "primary" &&
        css`
            color: ${theme.colorPrimary};
            background-color: ${selected ? theme.colorPrimary : theme.colorPrimary};
            border: 2px solid ${theme.colorPrimary};
            outline: 1px solid ${theme.colorPrimary};

            &:hover {
                background-color: ${theme.colorPrimary};
                border: 2px solid ${theme.colorPrimary};
            }

            &:active {
                background-color: ${theme.colorPrimary};
                border: 2px solid ${theme.colorPrimary};
            }

            &:focus {
                border: 2px solid ${theme.colorPrimary};
            }

            &:focus-visible {
                outline: 0px solid ${theme.colorPrimary};
            }

            &:disabled {
                border: 2px solid ${theme.colorPrimary};
                background-color: ${theme.colorPrimary};
            }
        `}
`
