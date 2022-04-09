import React from "react";
import { Input } from "..";

export default {
    title: 'Components/Input',
    component: Input,
    argTypes: {
        type: {
            type: 'string',
            required: true
        },
        placeholder: {
            type: 'string',
            required: false
        }
    }
}

const Template = (args) => <Input {...args} />

export const Text = Template.bind({});

export const Num = Template.bind({});

Num.args = {
    type: "number",
    placeholder: "Enter Number",
    onChange: (e)=>{}
}

Text.args = {
    type: "text",
    placeholder: "From StoryBook",
    onChange: (e)=>{}
}
