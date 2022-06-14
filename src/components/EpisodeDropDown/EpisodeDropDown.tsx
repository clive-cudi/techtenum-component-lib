import React from 'react';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import styles from './stylesheets/episodeDropdown.module.css';
import { useTheme } from '../../hooks';
import { number, string, oneOfType } from 'prop-types';

interface EpisodeDropDownTypes {
    title: string,
    time?: string
    styling?: React.CSSProperties
}

export const EpisodeDropDown = ({title, time, styling}: EpisodeDropDownTypes) =>{
    const theme = useTheme();
    return (
        <div className={styles.ed_wrapper} style={{...theme?.themeStyles, ...styling}}>
        <div className={styles.ed_title}>
            <div className={styles.ed_play}>
                <AiOutlinePlayCircle fontSize={20} style={{marginRight: "10px"}} />
            </div>
            <span>{title}</span>
        </div>
        <div className={styles.ed_time}>
            <span>{time}</span>
        </div>
    </div>
    )
}

EpisodeDropDown.propTypes = {
    title: string,
    time: oneOfType([string, number])
}