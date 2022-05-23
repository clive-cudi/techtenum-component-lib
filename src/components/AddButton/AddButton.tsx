import React from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { string, func } from 'prop-types';
import { useTheme } from '../..';
import styles from './stylesheets/addbutton.module.css';

interface addButtonProps {
    label: string
    onClick: (e?: React.MouseEvent<HTMLButtonElement>)=>{}
    styling: {[className: string]: string}
}

export const AddButton = ({label, onClick, styling}: addButtonProps): JSX.Element =>{
    const theme = useTheme();
    return (
        <button  className={styles.btn} onClick={(e)=>{onClick()}} style={{color: theme.themeStyles.color, ...styling}}>
            <IoIosAddCircleOutline style={{color: `#FFB8B8`}} fontSize={`60`} />
            {label && <span>{label}</span>}
        </button>
    )
}

AddButton.propTypes = {
    label: string,
    onClick: func
}