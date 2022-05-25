import React from "react";
import { bool, arrayOf, number, elementType, element, string } from "prop-types";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import styles from "./stylesheets/tableRow.module.css";
import { GrClose } from 'react-icons/gr';

interface TableRowTypes {
  td_row: [string]
  isCollapsible?: boolean
  index: number
  collapseHeight?: number | string
  collapseComponent?: JSX.Element | React.ReactNode
}

export const TableRow = ({ td_row, isCollapsible, index, collapseHeight, collapseComponent }: TableRowTypes): JSX.Element => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function toggleCollapse() {
    if (isCollapsed == true) {
      setIsCollapsed(false);
    } else {
      setIsCollapsed(true)
    }
  }
  return (
      <tr className={styles.tbr_main_wrapper} style={{ position: "relative", height: isCollapsed == true ? (collapseHeight ? collapseHeight : `400px`) : `50px`, background: index % 2 !== 0 ? `#e6e6e6` : `white` }}>
        {td_row.map((rowData, index) => {
          return <td key={index} style={{textAlign: 'center'}}>{rowData}</td>;
        })}
        {isCollapsible && (
          <td onClick={()=>{
            toggleCollapse()
          }} className={styles.exp_btn}>
            <FiChevronDown />
          </td>
        )}
        {isCollapsed && (
          <td style={{position: "absolute", left: "0px", height: "100%", width: "100%"}} className={styles.tbr_exp_wrapper}>
            <span>
              <div>
                <button onClick={()=>{toggleCollapse()}} className={styles.exp_close}><GrClose /></button>
                {/* <LearnerInfo username={td_row[1]} /> */}
                {collapseComponent}
              </div>
            </span>
          </td>
        )}
      </tr>
  );
};

TableRow.propTypes = {
  td_row: arrayOf(string) || arrayOf(number) || arrayOf(element),
  isCollapsible: bool,
  index: number,
  collapseHeight: number || string,
  collapseComponent: elementType
};
