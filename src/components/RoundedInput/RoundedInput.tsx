import React, {useState, useEffect} from "react";
import {string, any, bool, func, number, element, object} from 'prop-types';
import styles from './stylesheets/roundedInput.module.css';
import { useTheme } from '../..';
import { Input } from "..";
import { AiOutlineCheck } from "react-icons/ai";
import { FcHighPriority } from "react-icons/fc";

interface RoundedInputTypes {
    type: React.HTMLInputTypeAttribute
    placeholder?: string
    icon?: JSX.Element | React.ReactNode
    styling?: React.CSSProperties
    validateInput?: boolean
    regex?: RegExp
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=>{}
    checkLength?: number
}

export const RoundedInput = ({type, placeholder, icon, styling, validateInput, regex, onChange, checkLength, ...other}: RoundedInputTypes): JSX.Element=> {
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
        <div style={{...styling}} {...other} className={`${styles.ri_wrapper}`}>
            <span style={{color: theme?.themeStyles.color}}>{icon}</span>
            <Input type={type} placeholder={placeholder} onChange={(e: React.ChangeEvent<HTMLInputElement>): React.ChangeEvent<HTMLInputElement>=>{
                onChange(e);
                setInput(e.target.value);
                return e;
            }} styling={{color: theme?.themeStyles.color}} />
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