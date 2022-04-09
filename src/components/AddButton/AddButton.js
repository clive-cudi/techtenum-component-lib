import React from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { string, func } from 'prop-types';
import { useTheme } from '../..';
import styles from './stylesheets/addbutton.module.css';

export const AddButton = ({label, onClick, styling}) =>{
    const theme = useTheme();
    return (
        <button  className={styles.btn} onClick={()=>{onClick()}} style={{color: theme.themeStyles.color, ...styling}}>
            <IoIosAddCircleOutline style={{color: `#FFB8B8`}} fontSize={`60`} />
            {label && <span>{label}</span>}
        </button>
    )
}

AddButton.propTypes = {
    label: string,
    onClick: func
}