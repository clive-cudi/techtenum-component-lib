import React from 'react';
import { SummaryCard } from './SummaryCard';

export default {
    title: 'Components/SummaryCard',
    component: SummaryCard,
    argTypes: {}
}

const Template = (args) => <SummaryCard {...args} />;

export const Default = Template.bind({});

export const GraphTrigger = Template.bind({});

Default.args = {
    label: `Total number of patients`,
    number: `250`,
    background: `cyan`,
    styling: {}
}

GraphTrigger.args = {
    label: `Blood Glucose`,
    number: `7`,
    background: `#FFD78E`,
    graphTrigger: true,
    units: `mg/dl`,
    graphTriggerOnClick: ()=>{},
}