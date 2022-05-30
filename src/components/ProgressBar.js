import React from 'react'
import styles from '../styles/ProgressBar.module.scss';

const ProgressBar = ({progress}) => {
    return (
        <div className={styles.bar}>
            <div className={styles.progress} style={{width: progress + "%"}}>
                <span className={styles.percentage}>{`${progress}%`}</span>
            </div>
        </div>
    )
}

export default ProgressBar