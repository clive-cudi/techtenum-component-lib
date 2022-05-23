import React from 'react';
import styles from './stylesheets/modal.module.css';
import { any, object } from 'prop-types';

interface ModalTypes {
    data: JSX.Element | React.ReactNode | any
    styling?: React.CSSProperties
}

export const Modal = ({data, styling, ...other}: ModalTypes): JSX.Element => {
    return (
        <div className={`${styles.modal_wrapper}`} style={styling} {...other}>
            {data}
        </div>
    )
}

Modal.propTypes = {
    data: any,
    styling: object
}