import React from "react";
import { Button } from "./Button";
import { AiOutlineArrowRight } from 'react-icons/ai';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        label: {
            type: 'string',
            required: false
        }
    }
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({});

Default.args = {
    label: "Login",
    icon: <AiOutlineArrowRight />,
}