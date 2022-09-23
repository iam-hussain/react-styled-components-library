import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Input as InputElement } from "./Input"

export default {
    title: "Input",
    component: InputElement,
    argTypes: {},
} as ComponentMeta<typeof InputElement>

const Template: ComponentStory<typeof InputElement> = (args) => (
    <>
        <InputElement {...args} />
        <InputElement {...args} />
        <InputElement {...args} />
        <InputElement {...args} />
        <InputElement {...args} />
        <InputElement {...args} />
    </>
)

export const Input = Template.bind({})
Input.args = {
    id: "input",
    type: "text",
    name: "input",
    label: "Click Me",
    value: "Lorem ipsum",
    placeholder: "Enter your email ID",
    defaultMessage: "You email details will handled securely",
}
