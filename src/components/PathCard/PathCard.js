import React from "react";
import { AiOutlineClockCircle, AiOutlineUnorderedList } from 'react-icons/ai';
import { FiBookOpen } from 'react-icons/fi';
import { Button } from "..";
import styles from './stylesheets/pathCard.module.css';
import { useTheme } from "../..";
import {string, bool, number} from 'prop-types';

export const PathCard = ({type, title, link, poster, instructor, isInProgress, percentage_complete, no_modules, no_series, hours, styling}) => {
    const theme = useTheme();

    function tagColor(tag_type) {
        switch (tag_type){
            case 'path':
                return `#BF37FF`
            case 'module':
                return `#FF7F37`
            default:
                return `gray`
        }
    }

  return (
    <div className={styles.card_wrapper} style={{...theme.themeStyles, ...styling}}>
      <div className={styles.card_img}>
        {poster && (
          <img src={poster} alt={`${title}...image`} />
        )}
      </div>
      <div className={styles.card_info}>
        <div className={styles.card_tag}>
          <span style={{ background: tagColor(type) }}>{type}</span>
        </div>
        <div className={styles.card_title}>
          <h2>{title}</h2>
        </div>
        <span>By {instructor}</span>
        <div className={styles.card_details}>
          {type === "module" && !isInProgress && (
            <div className={styles.card_deets}>
              <span>
                <AiOutlineUnorderedList style={{ marginRight: "4px" }} />
                {no_series} series
              </span>
              <span>
                <AiOutlineClockCircle style={{ marginRight: "4px" }} />
                {hours} hours
              </span>
            </div>
          )}
          {type === "path" && !isInProgress && (
            <div className={styles.card_deets}>
              <span>
                <FiBookOpen style={{ marginRight: "4px" }} />
                {no_series} modules
              </span>
              <span>
                <AiOutlineClockCircle style={{ marginRight: "4px" }} />
                {hours} hours
              </span>
            </div>
          )}
          {/* {isInProgress &&
                        <div className={styles.progress_circular}>
                            <div className={styles.progress_inner}></div>
                            <div className={styles.progress_circle}>
                                <div className={`${styles.progress_bar} ${styles.progress_left}`}>
                                    <div className={styles.progress}></div>
                                </div>
                                <div className={`${styles.progress_bar} ${styles.progress_right}`}>
                                    <div className={styles.progress}></div>
                                </div>
                            </div>
                        </div>
                    } */}
          {isInProgress && (
            <div className={styles.card_deets}>
              <span>{percentage_complete}% done</span>
            </div>
          )}
        </div>
        <Button
          label={isInProgress ? <a href={link} style={{textDecoration: 'none', color: 'white', width: `100%`}}>Continue Learning</a> : `View Details`}
          styling={{ height: "38px" }}
        ></Button>
      </div>
    </div>
  );
};

PathCard.propTypes = {
    type: string,
    title: string,
    link: string,
    poster: string,
    instructor: string,
    isInProgress: bool,
    percentage_complete: number,
    no_modules: number,
    no_series: number,
    hours: number,
}