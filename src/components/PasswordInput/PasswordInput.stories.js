import React from 'react';
import { PasswordInput } from './PasswordInput';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiFillEye } from 'react-icons/ai';

export default {
    title: 'Components/PasswordInput',
    component: PasswordInput,
    argTypes: {}
}

const Template = (args) => <PasswordInput {...args} />

export const Default = Template.bind({});

Default.args = {
    onChange: (e)=>{},
    inputDivProps: {
        icon: <RiLockPasswordLine />,
    },
    endIconReplacement: {hidePassword: <RiLockPasswordLine />, showPassword: <AiFillEye />},
    isRounded: true
}