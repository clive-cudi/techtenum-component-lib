import React from 'react';
import { Modal } from './Modal';
import { Input } from '..';

export default {
    title: 'Components/Modal',
    component: Modal,
    argTypes: {
        data: {
            type: '',
            required: false
        }
    }
}

const Template = (args) => <Modal {...args} />

export const Default = Template.bind({});

Default.args = {
    data: <Input type={'text'} placeholder={`Modal TextBox`} onChange={()=>{}} styling={{outline: "none"}} />
}