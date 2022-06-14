import React from "react";
import { InputDiv } from "./InputDiv";
import { MdOutlineEmail} from 'react-icons/md';
import { BsKey } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

export default {
    title: 'Components/InputDiv',
    component: InputDiv,
    argTypes: {
        styling: {
            type: 'object',
            required: false,
        }
    }
}

const Template = (args) => <InputDiv {...args} />

export const Email = Template.bind({});

export const Password = Template.bind({});

export const Otp = Template.bind({});

Email.args = {
    type: "email",
    placeholder: "Enter Email",
    icon: <MdOutlineEmail />,
    validateInput: true,
    regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    onChange: (e)=>{},
    checkLength: 5,
}

Password.args = {
    type: "password",
    placeholder: "Enter Password",
    icon: <BsKey />,
    validateInput: true,
    onChange: (e)=> {},
    regex: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})"),
    checkLength: 6
}

Otp.args = {
    type: "tel",
    placeholder: "Enter Your Phone Number",
    icon: <AiOutlineUser />,
    validateInput: false,
    onChange: ()=>{},
}