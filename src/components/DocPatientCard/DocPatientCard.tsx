import React from 'react';
import styles from './stylesheets/docPatientCard.module.css';
import { string, func, oneOf, object } from 'prop-types';
import { useTheme } from '../../hooks';

interface DocPatientCardProps {
    type?: "Doctor" | "Hospital"
    name: string
    title: string
    profilePic?: string
    detailsOnClick: (e: React.MouseEvent<HTMLButtonElement>)=>{}
    removeOnClick: (e: React.MouseEvent<HTMLButtonElement>)=>{}
    styling: React.CSSProperties
}

export const DocPatientCard = ({name, title, profilePic, detailsOnClick, removeOnClick, styling}: DocPatientCardProps): JSX.Element =>{
    const theme = useTheme();
    return (
        <div className={styles.dpc_wrapper} style={{...theme?.themeStyles, ...styling}}>
            <div className={styles.dpc_profile_wrapper}>
                <div className={styles.dpc_profile}>
                    <img src={profilePic} alt={`@${name}`} />
                </div>
            </div>
            <div className={styles.dpc_deets}>
                <h2>{name}</h2>
                <h3>{title}</h3>
            </div>
            <div className={styles.dpc_btns}>
                <button onClick={(e)=>{detailsOnClick(e)}} style={{background: `#FFB8B8`}}>Details</button>
                <button onClick={(e)=>{removeOnClick(e)}} style={{background: `#E6E6E6`}}>Remove</button>
            </div>
        </div>
    )
}

DocPatientCard.propTypes = {
    type: oneOf([`Doctor`, `Hospital`]),
    name: string.isRequired,
    title: string.isRequired,
    profilePic: string,
    detailsOnClick: func.isRequired,
    removeOnClick: func.isRequired,
    styling: object
}