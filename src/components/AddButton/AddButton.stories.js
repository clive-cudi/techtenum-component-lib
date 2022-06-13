import React from 'react';
import { AddButton } from './AddButton';

export default {
    title: 'Components/AddButton',
    component: AddButton,
    argTypes: {}
}

const Template = (args) => <AddButton {...args} />

export const Default = Template.bind({});

Default.args = {
    label: `Add`,
    onClick: ()=>{}
}