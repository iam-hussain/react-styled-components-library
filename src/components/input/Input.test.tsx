import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { Input } from "./Input"

const defaultProps = {
    id: "email",
    type: "text",
    name: "email",
    onClick: jest.fn(),
    label: "Input",
}

describe("<Input />", () => {
    it("should render", () => {
        render(<Input {...defaultProps} />)

        expect(screen.getByTestId("button-comp")).toMatchSnapshot()
    })

    it("should call onClick", () => {
        render(<Input {...defaultProps} />)
        fireEvent.click(screen.getByTestId("button-comp"))

        expect(defaultProps.onClick).toHaveBeenCalledTimes(1)
    })

    it("should be disableable", () => {
        render(<Input {...defaultProps} disabled />)

        expect(screen.getByTestId("button-comp")).toHaveProperty("disabled")
    })

    it("should render children", () => {
        render(<Input {...defaultProps} disabled />)

        expect(screen.getByText(/Input/i)).toBeInTheDocument()
    })

    it("should allow custom className", () => {
        const props = {
            ...defaultProps,
            className: "Custom",
        }
        render(<Input {...props} />)

        expect(screen.getByTestId("button-comp")).toHaveProperty("className")
    })
})
