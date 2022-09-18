import React from "react"
import styled, { css } from "styled-components"

const buttonConfig = {
    small: {
        height: "32px",
        padding: "0 1rem",
        fontSize: "1rem",
    },
    regular: {
        height: "36px",
        padding: "0 1rem",
        fontSize: "1rem",
    },
    large: {
        height: "44px",
        padding: "0 1.5rem",
        fontSize: "1.3rem",
    },
}

export interface StyledButtonProps {
    type?: "primary" | "secondary" | "tertiary" | "danger" | "link" | "textLink"
    size?: "small" | "regular" | "large"
    fullWidth?: boolean
}

export const StyledButton = styled.button.attrs(
    (props: StyledButtonProps): StyledButtonProps => ({
        size: props.size || "regular",
        type: props.type || "primary",
        fullWidth: props.fullWidth || false,
    })
)`
    display: block;
    cursor: pointer;
    user-select: none;
    height: ${(props) => buttonConfig[props?.size || "small"].height};
    padding: ${(props) => buttonConfig[props?.size || "small"].padding};
    margin: ${(props) => props.theme.space[2]} 0;
    border-radius: ${(props) => props.theme.borderRadius};
    font-size: ${(props) => buttonConfig[props?.size || "small"].fontSize};
    font-weight: ${(props) => props.theme.weight.regular};
    line-height: ${(props) => props.theme.lineHeight[0]};
    transition: ${(props) => props.theme.transition[0]};
    width: ${(props) => (props.fullWidth ? "100%" : "unset")};
    min-width: 6.25rem;
    word-break: keep-all;
    white-space: nowrap;
    letter-spacing: ${(props) => props.theme.letterSpaceCaps};
    outline: 0;
    box-shadow: ${(props) => props.theme.defaultShadow};

    &:focus-visible {
        outline: 0;
    }

    &:disabled {
        color: ${(props) => props.theme.disabledTextColor};
        background-color: ${(props) => props.theme.disabledColor};
        border: 2px solid ${(props) => props.theme.disabledColor};
        box-shadow: none;
    }

    &:not(:disabled) {
        &:focus {
            outline: 3px solid ${(props) => props.theme.colorFocus};
        }
        .focus-visible {
            &:focus {
                &:not(:focus-visible) {
                    outline: 3px solid ${(props) => props.theme.colorFocus};
                }
            }
        }

        &:focus {
            &:not(:focus-visible) {
                outline: 0;
            }
        }
    }
    ${({ type, theme }) =>
        type === "primary" &&
        css`
            color: ${theme.colorPrimaryInverse};
            background-color: ${theme.colorPrimary};
            border: 2px solid ${theme.colorPrimary};

            &:not(:disabled) {
                &:hover {
                    background-color: ${theme.colorPrimaryLight};
                    border: 2px solid ${theme.colorPrimaryLight};
                }

                &:active {
                    background-color: ${theme.colorPrimaryDark};
                    border: 2px solid ${theme.colorPrimaryDark};
                }
            }
        `}

    ${({ type, theme }) =>
        type === "danger" &&
        css`
            color: ${theme.colorDangerInverse};
            background-color: ${theme.colorDanger};
            border: 2px solid ${theme.colorDanger};

            &:not(:disabled) {
                &:hover {
                    background-color: ${theme.colorDangerLight};
                    border: 2px solid ${theme.colorDangerLight};
                }

                &:active {
                    background-color: ${theme.colorDangerDark};
                    border: 2px solid ${theme.colorDangerDark};
                }
            }
        `}

    ${({ type, theme }) =>
        type === "secondary" &&
        css`
            color: ${theme.colorPrimary};
            background-color: transparent;
            border: 2px solid ${theme.colorPrimary};

            &:not(:disabled) {
                &:hover {
                    color: ${theme.colorPrimaryLight};
                    border: 2px solid ${theme.colorPrimaryLight};
                }

                &:active {
                    color: ${theme.colorPrimaryDark};
                    border: 2px solid ${theme.colorPrimaryDark};
                }
            }
        `}
     ${({ type, theme }) =>
        type === "tertiary" &&
        css`
            color: ${theme.textColor};
            background-color: transparent;
            border: 2px solid ${theme.textColor};

            &:not(:disabled) {
                &:hover {
                    color: ${theme.textMutedColor};
                    border: 2px solid ${theme.textMutedColor};
                }

                &:active {
                    color: ${theme.textMutedColor};
                    border: 2px solid ${theme.textMutedColor};
                }
            }
        `}

    ${({ type, theme }) =>
        type === "link" &&
        css`
            color: ${theme.colorPrimary};
            background-color: transparent;
            border: 0;
            box-shadow: none;
            &:not(:disabled) {
                &:hover {
                    color: ${theme.colorPrimaryLight};
                }

                &:active {
                    color: ${theme.colorPrimaryDark};
                }
            }
        `}

    ${({ type, theme }) =>
        type === "textLink" &&
        css`
            color: ${theme.textColor};
            background-color: ${theme.appContentBg};
            border: 0;
            box-shadow: none;
            &:not(:disabled) {
                &:hover {
                    color: ${theme.textMutedColor};
                }

                &:active {
                    color: ${theme.textMutedColor};
                }
            }
        `}
`

type OnClickEvent = React.MouseEvent<HTMLButtonElement>

export interface ButtonProps extends StyledButtonProps {
    label: string
    disabled?: boolean
    className?: string
    onClick?: (e: OnClickEvent) => void
}

export const Button = ({ label, onClick, ...props }: ButtonProps) => {
    function handleOnClick(event: OnClickEvent) {
        if (onClick) {
            onClick(event)
        }
    }

    return (
        <StyledButton type='button' {...props} onClick={handleOnClick}>
            {label}
        </StyledButton>
    )
}
