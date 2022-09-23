import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Button as ButtonElement } from "./Button"

export default {
    title: "Button",
    component: ButtonElement,
    argTypes: {},
} as ComponentMeta<typeof ButtonElement>

const Template: ComponentStory<typeof ButtonElement> = (args) => <ButtonElement {...args} />

export const Button = Template.bind({})
Button.args = {
    label: "Click Me",
    color: "primary",
    mode: "filled",
    size: "regular",
    fullWidth: false,
    onClick: () => console.log("Button Clicked"),
}
