import React from 'react';
import { Table } from './Table';

export default {
    title: 'Components/Table',
    component: Table,
    argTypes: {}
}

const Template = (args)=> <Table {...args} />

export const Default = Template.bind({});

let Table_data_structure = [
    ["1", "James Muhoro", "13-02-2-2021", "12/20", "60%"],
    ["2", "Edna Kagendo", "22-01-2021", "18/20", "90%"],
    ["3", "James Muhoro", "13-02-2-2021", "12/20", "60%"],
    ["4", "Edna Kagendo", "22-01-2021", "18/20", "90%"],
    ["5", "James Muhoro", "13-02-2-2021", "12/20", "60%"],
    ["6", "Edna Kagendo", "22-01-2021", "18/20", "90%"],
    ["7", "James Muhoro", "13-02-2-2021", "12/20", "60%"],
    ["8", "Edna Kagendo", "22-01-2021", "18/20", "90%"],
  ];
  

Default.args = {
    tableConfigCols: ["s/n", "Learner", "Date done", "Points", "Percentage"],
    tableData: Table_data_structure,
    isCollapsible: true,
    collapseHeight: '700px',
    collapseComponent: <button>Collapsed</button>,
}