import React from "react";
import {string, any} from 'prop-types';
import styles from './stylesheets/input.module.css';

interface InputProps {
    type: React.HTMLInputTypeAttribute,
    placeholder?: string
    styling?: React.CSSProperties
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {}
}

export const Input = ({type, placeholder, styling, onChange, ...other}: InputProps): JSX.Element => {
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
