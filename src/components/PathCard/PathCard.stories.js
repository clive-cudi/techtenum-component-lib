import React from 'react';
import { PathCard } from '..';

export default {
    title: 'Components/PathCard',
    component: PathCard,
    argTypes: {}
}

const Template = (args) => <PathCard {...args} />;

export const Path = Template.bind({});

export const Module = Template.bind({});

Path.args = {
    type: `path`,
    title: `Javascript`,
    link: ``,
    poster: `https://source.unsplash.com/random`,
    instructor: `Henry`,
    isInProgress: true,
    percentage_complete: 99,
    no_modules: 12,
    no_series: 28,
    hours: 120,
}

Module.args = {
    type: `module`,
    title: `Javascript`,
    link: ``,
    poster: `https://source.unsplash.com/random`,
    instructor: `Henry`,
    isInProgress: false,
    percentage_complete: 70,
    no_modules: 12,
    no_series: 28,
    hours: 120,
}