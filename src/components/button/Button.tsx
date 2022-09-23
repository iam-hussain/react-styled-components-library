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
    color?: "primary" | "secondary" | "danger" | "tertiary"
    mode?: "filled" | "line" | "ghost"
    size?: "small" | "regular" | "large"
    fullWidth?: boolean
}

export const StyledButton = styled.button.attrs(
    (props: StyledButtonProps): StyledButtonProps => ({
        size: props.size || "regular",
        mode: props.mode || "filled",
        color: props.color || "primary",
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

    ${({ color, mode, theme }) =>
        mode === "filled" &&
        color === "primary" &&
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

    ${({ color, mode, theme }) =>
        mode === "filled" &&
        color === "secondary" &&
        css`
            color: ${theme.colorSecondaryInverse};
            background-color: ${theme.colorSecondary};
            border: 2px solid ${theme.colorSecondary};

            &:not(:disabled) {
                &:hover {
                    background-color: ${theme.colorSecondaryLight};
                    border: 2px solid ${theme.colorSecondaryLight};
                }

                &:active {
                    background-color: ${theme.colorSecondaryDark};
                    border: 2px solid ${theme.colorSecondaryDark};
                }
            }
        `}

    ${({ color, mode, theme }) =>
        mode === "filled" &&
        color === "danger" &&
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

    ${({ color, mode, theme }) =>
        mode === "filled" &&
        color === "tertiary" &&
        css`
            color: ${theme.colorTertiaryInverse};
            background-color: ${theme.colorTertiary};
            border: 2px solid ${theme.colorTertiary};

            &:not(:disabled) {
                &:hover {
                    background-color: ${theme.colorTertiaryLight};
                    border: 2px solid ${theme.colorTertiaryLight};
                }

                &:active {
                    background-color: ${theme.colorTertiaryDark};
                    border: 2px solid ${theme.colorTertiaryDark};
                }
            }
        `}



    ${({ color, mode, theme }) =>
        mode === "line" &&
        color === "primary" &&
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

    ${({ color, mode, theme }) =>
        mode === "line" &&
        color === "secondary" &&
        css`
            color: ${theme.colorSecondary};
            background-color: transparent;
            border: 2px solid ${theme.colorSecondary};

            &:not(:disabled) {
                &:hover {
                    color: ${theme.colorSecondaryLight};
                    border: 2px solid ${theme.colorSecondaryLight};
                }

                &:active {
                    color: ${theme.colorSecondaryDark};
                    border: 2px solid ${theme.colorSecondaryDark};
                }
            }
        `}

    ${({ color, mode, theme }) =>
        mode === "line" &&
        color === "danger" &&
        css`
            color: ${theme.colorDanger};
            background-color: transparent;
            border: 2px solid ${theme.colorDanger};

            &:not(:disabled) {
                &:hover {
                    color: ${theme.colorDangerLight};
                    border: 2px solid ${theme.colorDangerLight};
                }

                &:active {
                    color: ${theme.colorDangerDark};
                    border: 2px solid ${theme.colorDangerDark};
                }
            }
        `}

    ${({ color, mode, theme }) =>
        mode === "line" &&
        color === "tertiary" &&
        css`
            color: ${theme.colorTertiary};
            background-color: transparent;
            border: 2px solid ${theme.colorTertiary};

            &:not(:disabled) {
                &:hover {
                    color: ${theme.colorTertiaryLight};
                    border: 2px solid ${theme.colorTertiaryLight};
                }

                &:active {
                    color: ${theme.colorTertiaryDark};
                    border: 2px solid ${theme.colorTertiaryDark};
                }
            }
        `}


    ${({ color, mode, theme }) =>
        mode === "ghost" &&
        color === "primary" &&
        css`
            color: ${theme.colorPrimary};
            background-color: transparent;
            border: 0px;
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

    ${({ color, mode, theme }) =>
        mode === "ghost" &&
        color === "secondary" &&
        css`
            color: ${theme.colorSecondary};
            background-color: transparent;
            border: 0px;
            box-shadow: none;

            &:not(:disabled) {
                &:hover {
                    color: ${theme.colorSecondaryLight};
                }

                &:active {
                    color: ${theme.colorSecondaryDark};
                }
            }
        `}

    ${({ color, mode, theme }) =>
        mode === "ghost" &&
        color === "danger" &&
        css`
            color: ${theme.colorDanger};
            background-color: transparent;
            border: 0px;
            box-shadow: none;

            &:not(:disabled) {
                &:hover {
                    color: ${theme.colorDangerLight};
                }

                &:active {
                    color: ${theme.colorDangerDark};
                }
            }
        `}

    ${({ color, mode, theme }) =>
        mode === "ghost" &&
        color === "tertiary" &&
        css`
            color: ${theme.colorTertiary};
            background-color: transparent;
            border: 0px;
            box-shadow: none;

            &:not(:disabled) {
                &:hover {
                    color: ${theme.colorTertiaryLight};
                }

                &:active {
                    color: ${theme.colorTertiaryDark};
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
