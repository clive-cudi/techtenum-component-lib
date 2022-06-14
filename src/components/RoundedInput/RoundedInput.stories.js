import React from 'react';
import { RoundedInput } from './RoundedInput';
import { MdOutlineEmail} from 'react-icons/md';
import { BsKey } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

export default {
    title: 'Components/RoundedInput',
    component: RoundedInput,
    argTypes: {}
}

const Template = (args) => <RoundedInput {...args} />

export const Email = Template.bind({});

export const Password = Template.bind({});

export const Otp = Template.bind({});

Email.args = {
    type: "Email",
    placeholder: "Enter Email",
    icon: <MdOutlineEmail />,
    validateInput: true,
    regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    onChange: (e)=>{},
    checkLength: 5,
}

Password.args = {
    type: "Password",
    placeholder: "Enter Password",
    icon: <BsKey />,
    validateInput: true,
    onChange: (e)=> {},
    regex: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})"),
    checkLength: 6
}

Otp.args = {
    type: "telephone",
    placeholder: "Enter Your Phone Number (+254...)",
    icon: <AiOutlineUser />,
    validateInput: false,
    onChange: ()=>{},
}