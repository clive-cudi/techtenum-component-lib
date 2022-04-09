import React from 'react';
import { useState } from 'react';
import styles from './stylesheets/seriesDropDown.module.css';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { BsDot } from 'react-icons/bs';
import { EpisodeDropDown } from '..';
import { useTheme } from '../..';
import { array, string, bool, object, number, oneOfType } from 'prop-types';

export const SeriesDropDown = ({episodeData, title, total_time, expanded, styling})=>{
    const [expandedStatus, setExpandedStatus] = useState(expanded);
    const theme = useTheme();

    function toggleExp(){
        if (expandedStatus){
            setExpandedStatus(false);
        } else {
            setExpandedStatus(true);
        }
    }


    return (
        <div className={styles.sd_wrapper} style={{...theme.themeStyles, ...styling}}>
            <div className={styles.sd_content}>
                <div className={styles.sd_header} onClick={()=>{toggleExp()}}>
                    <span style={{background: theme.title === "Dark" ? "#322b76" : ""}}></span>
                    <div className={styles.sd_title}>
                        <h2>{title}</h2>
                    </div>
                    <div className={styles.sd_info}>
                        <span>{episodeData?.length} Episodes</span>
                        <span><BsDot /></span>
                        <span>{total_time}</span>
                        <span style={{fontSize: '20px'}}>{expandedStatus ? <FiChevronUp /> : <FiChevronDown />}</span>
                    </div>
                </div>
                {expandedStatus &&
                        <div className={styles.sd_exp}>
                            {
                                episodeData.map((episode, index)=>{
                                    return (
                                        <EpisodeDropDown key={index} title={episode?.title} time={episode?.time} />
                                    )
                                })
                            }
                        </div>
                    }
            </div>
        </div>
    )
}

SeriesDropDown.propTypes = {
    episodeData: array,
    title: string,
    total_time: oneOfType([number, string]),
    expanded: bool,
    styling: object
}