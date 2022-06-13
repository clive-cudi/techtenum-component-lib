import React from 'react';
import { TableRow } from './TableRow';

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
    td_row: ["1", "James Muhoro", "13-02-2-2021", "12/20", "60%"],
    isCollapsible: true,
}