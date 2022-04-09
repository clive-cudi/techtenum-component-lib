import React, {useState, useEffect} from "react";
import {string, any, bool, func, number, element, object} from 'prop-types';
import styles from './stylesheets/roundedInput.module.css';
import { useTheme } from '../..';
import { Input } from "..";
import { AiOutlineCheck } from "react-icons/ai";
import { FcHighPriority } from "react-icons/fc";

export const RoundedInput = ({type, placeholder, icon, styling, validateInput, regex, onChange, checkLength, ...other})=> {
    const [input, setInput] = useState('');
    const [isValid, setValid] = useState(false);
    const theme = useTheme();

    useEffect(()=>{
        if (validateInput === true && input !== '') {
            inputValidation(regex, input, checkLength);
        }
    },[input])

    function inputValidation(reg, input, inputCheckLength) {
        if (input.length >= inputCheckLength) {
            // test against the regex
            if (reg.test(input)) {
                setValid(true)
            } else {
                setValid(false)
            }
        } else {
            setValid(false)
        }
    }

    return (
        <div style={{...styling}} {...other} className={`${styles.ri_wrapper}`}>
            <span style={{color: theme.themeStyles.color}}>{icon}</span>
            <Input type={type} placeholder={placeholder} onChange={(e)=>{
                onChange(e);
                setInput(e.target.value);
            }} styling={{color: theme.themeStyles.color}} />
            {
                input !== '' && validateInput && (isValid ? <AiOutlineCheck color="chartreuse" /> : <FcHighPriority />)
            }
        </div>
    )
}

RoundedInput.propTypes = {
    type: string,
    placeholder: string,
    icon: element,
    styling: object,
    validateInput: bool,
    regex: any,
    onChange: func,
    checkLength: number,
}