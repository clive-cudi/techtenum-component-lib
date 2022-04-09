import React from 'react';
import styles from './stylesheets/learnerInfo.module.css';
import { string, arrayOf, object } from 'prop-types';

export const LearnerInfo = ({username, profilePic, about, progressReport, assessmentSubmissions}) => {
    return (
        <div className={styles.ln_wrapper}>
            <h2>{username}</h2>
        </div>
    )
}

const progressReportDataStruture = [
    {
        progressTitle: '',
        percentageDone: ''
    }
]

const assessmentSubmissionDataStruture = [
    {
        assessmentTitle: '',
        percentageDone: ''
    }
]

LearnerInfo.propTypes = {
    username: string,
    profilePic: string,
    about: string,
    progressReport: arrayOf(object),
    assessmentSubmissions: arrayOf(object)
}