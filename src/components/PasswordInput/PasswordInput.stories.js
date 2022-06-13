import React from 'react';
import { PasswordInput } from './PasswordInput';
import { RiLockPasswordLine } from 'react-icons/ri';

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
        validateInput: false,
    },
    // endIconReplacement: {hidePassword: <RiLockPasswordLine />, showPassword: <AiFillEye />}
}