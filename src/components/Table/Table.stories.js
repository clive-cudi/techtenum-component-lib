import React from 'react';
import { Table } from '..';
import { Table_data_structure, TableConfigCols_data_structure } from './Table';

export default {
    title: 'Components/Table',
    component: Table,
    argTypes: {}
}

const Template = (args)=> <Table {...args} />

export const Default = Template.bind({});

Default.args = {
    tableConfigCols: TableConfigCols_data_structure,
    tableData: Table_data_structure,
    isCollapsible: true,
    collapseHeight: '700px',
    collapseComponent: <button>Collapsed</button>,
}