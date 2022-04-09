import React from 'react';
import { PurchaseCard } from '..';

export default {
    title: 'Components/PurchaseCard',
    component: PurchaseCard,
    argTypes: {},
    decorators: [
        (Story)=>{
            return(
                <div style={{width: "400px"}}>
                    <Story />
                </div>
            )
        }
    ]
}

const Template = (args) => <PurchaseCard {...args} />;

export const Default = Template.bind({});

Default.args = {
    type: `path`,
    price: `3000`,
    noOfmodules: 10,
    hours: 30,
    certificate: true,
    img: `https://source.unsplash.com/random`
}