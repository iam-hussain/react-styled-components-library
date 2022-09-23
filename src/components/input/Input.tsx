import { InputMessage, Label } from "../form"
import React from "react"
import styled from "styled-components"

export interface StyledInputProps {
    hasError?: boolean
    noRightBorder?: boolean
}

export const StyledInput = styled.input.attrs(
    (props: StyledInputProps): StyledInputProps => ({
        hasError: props.hasError || false,
        noRightBorder: props.noRightBorder || false,
    })
)`
    height: 36px;
    width: auto;
    user-select: none;
    flex-grow: 1;
    overflow: visible;
    padding: 0 ${(props) => props.theme.space[2]};
    font-size: ${(props) => props.theme.fontSize};
    font-weight: ${(props) => props.theme.weight.regular};
    background-color: ${(props) => props.theme.inputBg};
    box-shadow: none;
    transition: ${(props) => props.theme.transition[0]};
    border: 1px solid ${(props) => props.theme.inputBorder};
    border-bottom: 1px solid ${(props) => (props.hasError ? props.theme.colorDanger : props.theme.inputBorder)};
    color: ${(props) => props.theme.inputTextColor};

    &::placeholder {
        color: ${(props) => props.theme.inputBorder};
        font-family: ${(props) => props.theme.fontCode};
        font-size: ${(props) => props.theme.fontSizeSmall};
        font-style: italic;
    }

    &:not(:disabled) {
        &:focus {
            outline: 0;
            border-bottom: 1px solid ${(props) => props.theme.colorFocus};
        }

        &:focus {
            &:not(:focus-visible) {
                outline: 0;
                border: 0;
            }
        }
    }

    &:disabled {
        color: ${(props) => props.theme.disabledTextColor};
        background-color: ${(props) => props.theme.disabledColor};
        border: 2px solid ${(props) => props.theme.disabledColor};
        &::placeholder {
            color: ${(props) => props.theme.disabledTextColor};
        }
    }
`

export const InputWrapper = styled.div<{ flex?: number }>`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: ${(props) => props.theme.space[6]};
    flex: ${(props) => (props?.flex !== undefined ? props.flex : 1)};
`

export interface InputProps extends StyledInputProps {
    id: string
    type: string
    name: string
    label?: string
    placeholder?: string
    errorMessage?: string
    defaultMessage?: string
    disabled?: boolean
    className?: string
    autocomplete?: string
    onChange?: () => void
    onBlur?: () => void
    value?: string | number | undefined
}

export function Input({ label, errorMessage, defaultMessage, ...props }: InputProps) {
    const hasError = !!errorMessage
    return (
        <InputWrapper>
            {label && (
                <Label disabled={props.disabled} hasError={hasError}>
                    {label}
                </Label>
            )}
            <StyledInput hasError={!!errorMessage} {...props} />
            {errorMessage || defaultMessage ? (
                <InputMessage disabled={props.disabled} hasError={hasError}>
                    {errorMessage || defaultMessage}
                </InputMessage>
            ) : (
                <></>
            )}
        </InputWrapper>
    )
}
