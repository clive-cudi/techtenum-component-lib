import React, {useState, useEffect} from "react";
import {string, any, bool, func, number, element, object} from 'prop-types';
import styles from './stylesheets/inputDiv.module.css';
import { Input } from "..";
import { AiOutlineCheck } from "react-icons/ai";
import { FcHighPriority } from "react-icons/fc";
import { useTheme } from "../../hooks";

export interface InputDivProps {
    type: React.HTMLInputTypeAttribute
    placeholder?: string
    icon?: JSX.Element | React.ReactNode
    styling?: React.CSSProperties
    validateInput?: boolean
    regex?: RegExp
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=>{}
    checkLength?: number
    endIconReplacement?: JSX.Element | React.ReactNode
    inputArgs?: {}
}

export const InputDiv = ({type, placeholder, icon, styling, validateInput, regex, onChange, checkLength, endIconReplacement, inputArgs, ...other}: InputDivProps) => {
    const [input, setInput] = useState('');
    const [isValid, setValid] = useState(false);
    const theme = useTheme();

    useEffect(()=>{
        if (validateInput === true && input !== '') {
            inputValidation(regex, input, checkLength);
        }
    },[input])

    function inputValidation(reg?: RegExp, input?: string | any, inputCheckLength?: number) {
        if (inputCheckLength){
            if (input.length >= inputCheckLength) {
                // test against the regex
                if (reg?.test(input)) {
                    setValid(true)
                } else {
                    setValid(false)
                }
            } else {
                setValid(false)
            }
        }
    }
    
    return (
        <div style={{...styling}} {...other} className={`${styles.input_div_wrapper}`}>
            <span style={{color: theme?.themeStyles.color}}>{icon}</span>
            <Input type={type} placeholder={placeholder} onChange={(e: React.ChangeEvent<HTMLInputElement>): React.ChangeEvent<HTMLInputElement>=>{
                onChange(e);
                setInput(e.target.value);
                return e;
            }} styling={{color: theme?.themeStyles.color}} />
            {
                input !== '' && validateInput && (isValid ? <AiOutlineCheck color="chartreuse" /> : <FcHighPriority />)
            }
            {
                validateInput == false && endIconReplacement
            }
        </div>
    )
}

InputDiv.propTypes = {
    type: string,
    placeholder: string,
    icon: element,
    styling: object,
    validateInput: bool,
    regex: any,
    onChange: func,
    checkLength: number,
}