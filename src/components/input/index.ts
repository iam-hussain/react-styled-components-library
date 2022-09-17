import styled from "styled-components"

export interface InputProps {
    hasError?: boolean
    noRightBorder?: boolean
}

export const Input = styled.input<InputProps>``
