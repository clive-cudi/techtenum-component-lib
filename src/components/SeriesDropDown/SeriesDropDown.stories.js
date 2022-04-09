import { any } from 'prop-types';
import React from 'react';
import { SeriesDropDown } from '..';

const seriesData = [
    {
        title: 'Introducing ES6',
        total_time: '1 hour 2mins',
        episodes: [
            {
                title: 'Arrow functions',
                time: '4:30'
            },
            {
                title: 'Object destructuring',
                time: '2:32'
            },
            {
                title: 'Ternary operator',
                time: '1:30'
            },
            {
                title: 'Higher order functions',
                time: '3:16'
            },
        ]
    },
    {
        title: 'Variables and Types',
        total_time: '2 hours 3mins',
        episodes: [
            {
                title: '',
                time: ''
            },
            {
                title: '',
                time: ''
            },
            {
                title: '',
                time: ''
            },
        ]
    },
]

export default {
    title: 'Components/SeriesDropDown',
    component: SeriesDropDown,
    argTypes: {}
}

const Template = (args) => <SeriesDropDown {...args} />;

export const Default = Template.bind({});

Default.args = {
    episodeData: seriesData,
    title: `Javascript fundamentals`,
    total_time: 20,
    expanded: false
}