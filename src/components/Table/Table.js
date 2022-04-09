import React from "react";
import styles from "./stylesheets/table.module.css";
import { arrayOf, string, bool, elementType, number, object, any, oneOfType } from "prop-types";
import { TableRow } from "..";

// tableConfigCols sets up the configuration of the table as in the number of columns and their names to be used in the table

// tableData defines the data in the rows

// data to be inserted in Csv Like format

export const Table = ({ tableConfigCols, tableData, isCollapsible, collapseComponent, collapseHeight, styling, tableStyling, tableArgs }) => {
  return (
    <div className={styles.tb_main_wrapper} style={{...styling}}>
      <table cellSpacing={0} style={{...tableStyling}} {...tableArgs}>
        <thead>
          <tr style={{ background: `#1e293b` }}>
              {tableConfigCols.map((col, index) => {
                return <th key={index}>{col}</th>;
              })} 
              {isCollapsible && <th>More</th>}
            </tr>
        </thead>
        <tbody>
          {/* Table Header */}
          {tableData?.map((row, index) => {
            return (
              <>
                {/* Table Row */}
                <TableRow key={index} td_row={row} isCollapsible={isCollapsible} index={index} collapseComponent={collapseComponent} collapseHeight={collapseHeight} />
                {/* <tr style={{ position: "relative" }}>
                {row?.map((rowData) => {
                  return (
                    <>
                      <td>{rowData}</td>
                    </>
                  );
                })}
                {isCollapsible}
                {isCollapsible && (
                  <div
                    className={styles.tb_exp_wrapper}
                    style={{ position: "absolute" }}
                  >
                    <LearnerInfo username={row[1]} />
                  </div>
                )}
              </tr> */}
              </>
            );
          })}
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  tableConfigCols: arrayOf(string).isRequired,
  tableData: arrayOf(string).isRequired,
  isCollapsible: bool,
  collapseComponent: elementType,
  collapseHeight: oneOfType([number, string]),
  styling: object,
  tableStyling: object,
  tableArgs: any
};

// input props in a csv like format

export const Table_data_structure = [
  ["1", "James Muhoro", "13-02-2-2021", "12/20", "60%"],
  ["2", "Edna Kagendo", "22-01-2021", "18/20", "90%"],
  ["3", "James Muhoro", "13-02-2-2021", "12/20", "60%"],
  ["4", "Edna Kagendo", "22-01-2021", "18/20", "90%"],
  ["5", "James Muhoro", "13-02-2-2021", "12/20", "60%"],
  ["6", "Edna Kagendo", "22-01-2021", "18/20", "90%"],
  ["7", "James Muhoro", "13-02-2-2021", "12/20", "60%"],
  ["8", "Edna Kagendo", "22-01-2021", "18/20", "90%"],
];

export const TableConfigCols_data_structure = ["s/n", "Learner", "Date done", "Points", "Percentage"];