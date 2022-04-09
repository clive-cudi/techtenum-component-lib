import React from 'react';
import { TableRow } from './TableRow';
import { Table_data_structure } from '../Table';

export default {
    title: 'Components/TableRow',
    component: TableRow,
    argTypes: {},
    decorators: [
        (Story)=>{
            return (
                <table cellSpacing={0} style={{height: 'fit-content', width: '100%'}}>
                    <tbody>
                        <Story />
                    </tbody>
                </table>
            )
        }
    ]
}

const Template = (args) => <TableRow {...args} />

export const Default = Template.bind({});

Default.args = {
    td_row: Table_data_structure[0],
    isCollapsible: true,
}