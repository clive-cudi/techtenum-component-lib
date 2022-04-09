import React from 'react';
import { string, object, any, oneOfType } from 'prop-types';
import styles from './stylesheets/button.module.css';
import { useTheme } from '../../hooks';

export const Button = ({label, styling, icon, ...other}) => {
    const theme = useTheme();
    return (
        <button className={`${styles.button}`} style={{...styling}} {...other}>{label}{icon}</button>
    )
}

Button.propTypes = {
    label: oneOfType([string, object]),
    icon: any,
}