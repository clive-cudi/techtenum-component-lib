import React, {useState} from 'react';
import styles from './stylesheets/inputSelect.module.css';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { useTheme } from '../..';

// Add icons to each item in list
type option = {
    label: string
    value: string
    icon: string
}

interface InputSelectProps {
    options: [option]
    defaultOption: option
    onValue: (e: string)=>{}
    styling?: React.CSSProperties
    optionDropDownStyling?: React.CSSProperties
    hasIcons?: boolean
}

export const InputSelect = ({options, defaultOption, onValue, styling, optionDropDownStyling, hasIcons, ...args}: InputSelectProps): JSX.Element=>{
    const [value, setValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();

    function toggleDropDown(){
        if (isOpen == true){
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    return (
        <div className={styles.is_wrapper} style={{...styling}} {...args}>
            <span className={styles.abstraction_wrapper}>
                <button onClick={()=>{toggleDropDown()}}>{isOpen == true ? <BsChevronUp /> : <BsChevronDown />}</button>
            </span>
            <select style={{color: theme?.themeStyles?.color ? theme.themeStyles.color : 'white'}} value={value !== "" ? value : defaultOption.value} autoComplete={`true`}>
                <option value={defaultOption?.value}>{defaultOption?.label}</option>
                {
                    options.map((option)=>{
                        return (
                            <option value={option.value}>{option.label}</option>
                        )
                    })
                }
            </select>
            {isOpen == true &&
                <div className={styles.is_options_wrapper} style={{...optionDropDownStyling, color: "green"}} >
                    <ul>
                        {options.map((option)=>{
                            return (
                                <li onClick={()=>{
                                    setValue(option.value);
                                    toggleDropDown();
                                    onValue(option.value);
                                }}><span>{hasIcons && <img src={option.icon} />}</span>{option.label}</li>
                            )
                        })}
                    </ul>
                </div>
            }
        </div>
    )
}