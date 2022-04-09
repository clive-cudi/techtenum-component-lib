import React from 'react';
import { EpisodeDropDown } from '..';

export default {
    title: 'Components/EpisodeDropDown',
    component: EpisodeDropDown,
    argTypes: {}
}

const Template = (args) => <EpisodeDropDown {...args} />;

export const Default = Template.bind({});

Default.args = {
    title: `Javascript fundamentals`,
    time: 30
}