import React from 'react';
import styles from './stylesheets/modal.module.css';
import { any, object } from 'prop-types';

export const Modal = ({data, styling, other}) => {
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