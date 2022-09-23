import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { TypographyElement } from "./Typography"

export default {
    title: "Typography",
    component: TypographyElement,
    argTypes: {},
} as ComponentMeta<typeof TypographyElement>

const Template: ComponentStory<typeof TypographyElement> = (args) => <TypographyElement {...args} />

export const Typography = Template.bind({})
Typography.args = {
    text: "Lorem ipsum dolor sit amet consectetur elit.",
}
