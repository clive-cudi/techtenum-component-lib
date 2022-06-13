import React from 'react';
import { DocPatientCard } from './DocPatientCard';

export default {
    title: 'Components/DocPatientCard',
    component: DocPatientCard,
    args: {}
}

const Template = (args) => <DocPatientCard {...args} styling={{}}/>

export const Doctor = Template.bind({});

export const Hospital = Template.bind({});

Doctor.args = {
    type: `Doctor`,
    name: `Dr. Mary Jane Nyambucha`,
    title: `Diabetes Specialist`,
    profilePic:  `https://source.unsplash.com/random`,
    detailsOnClick: (e)=>{},
    removeOnClick: (e)=>{}
}

Hospital.args = {
    type: `Hospital`,
    name: `Kenyatta National Hospital`,
    title: `Referral hospital`,
    profilePic: `https://source.unsplash.com/random`,
    detailsOnClick: (e)=>{},
    removeOnClick: (e)=>{}
}