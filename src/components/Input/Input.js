import React from "react";
import {string, any} from 'prop-types';
import styles from './stylesheets/input.module.css';
import { useTheme } from "../../hooks";

export const Input = ({type, placeholder, styling, onChange, ...other}) => {
    const theme = useTheme();
    return (
        <input className={`${styles.input}`} type={type} placeholder={placeholder} style={{...styling}} onChange={(e)=>{
            onChange(e);
        }} {...other} />
    )
}

Input.propTypes = {
    type: string.isRequired,
    placeholder: string,
    styling: any,
    other: any
}
