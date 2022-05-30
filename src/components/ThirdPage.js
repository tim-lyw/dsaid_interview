
import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import styles from '../styles/ThirdPage.module.scss';

const ThirdPage = ({ videoData, file }) => {
    const [progress, setProgress] = useState(0);
    const [completed, setCompleted] = useState(null);

    useEffect(() => {
        const formData = new FormData();
        formData.append("video", file);
        formData.append("title", videoData.title);
        formData.append("date", videoData.date);
        formData.append("time", videoData.time);
        formData.append("location", videoData.location);

        const xhr = new XMLHttpRequest();

        //Get upload progress
        xhr.upload.onprogress = function (event) {
            if (event.lengthComputable) {
                var percent = Math.floor(event.loaded / event.total * 100);
                setProgress(percent);

            }
        };
        //Callback function after upload
        xhr.onload = () => {
            if (xhr.status === 200) {
                setCompleted(true);
            } else {
                setCompleted(false);
            }
        };

        xhr.open('POST', 'https://dsaid-backend.herokuapp.com/uploadVideo');
        xhr.send(formData);
    }, []);

    const display = () => {
        if(completed === true){
            return <h1 className={styles.result}>Completed!</h1>;
        }else if(completed === false){
            return <h1 className={styles.result}>Upload Error!</h1>
        }
    }


    return (
        <div>
            <ProgressBar progress={progress} />
            {display()}
            
        </div>

    )
}

export default ThirdPage