import React from "react";
import styles from "./stylesheets/summaryCard.module.css";
import { string, number, object, bool, func, oneOfType } from "prop-types";

export const SummaryCard = ({number, label, background, text_color, styling, graphTrigger, graphTriggerOnClick, units}) => {
  return (
    <div
      className={styles.sc_wrapper}
      style={{
        ...styling,
        background: background,
        color: text_color ? text_color : "black",
      }}
    >
      {graphTrigger ? (
        <>
          <h3>{label}</h3>
          <span>
            <h1>{number}</h1>
            <h3>{units}</h3>
          </span>
        </>
      ) : (
        <>
          <h1>{number}</h1>
          <h3>{label}</h3>
        </>
      )}
      {graphTrigger && (
        <button
          onClick={() => {
            graphTriggerOnClick();
          }}
        >
          View Graph
        </button>
      )}
    </div>
  );
};

SummaryCard.propTypes = {
  number: oneOfType([number, string]),
  label: string,
  background: string,
  text_color: string,
  styling: object,
  graphTrigger: bool,
  graphTriggerOnClick: func,
  units: string,
};
