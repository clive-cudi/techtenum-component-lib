import React from 'react';
import { LearnerInfo } from '..';

export default {
    title: 'Components/LearnerInfo',
    component: LearnerInfo,
    argTypes: {}
}

const Template = (args) => <LearnerInfo {...args} />

export const Default = Template.bind({});

Default.args = {}