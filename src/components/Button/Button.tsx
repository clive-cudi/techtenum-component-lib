import React from 'react';
import styles from './stylesheets/button.module.css';

interface ButtonProps {
    label: string | JSX.Element,
    styling?: React.CSSProperties,
    icon?: JSX.Element
    other?: any
}

export const Button = ({label, styling, icon, ...other}: ButtonProps): JSX.Element => {
    // const theme = useTheme();
    return (
        <button className={`${styles.button}`} style={{...styling}} {...other}>{label}{icon}</button>
    )
}