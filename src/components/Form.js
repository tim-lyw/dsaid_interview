import React, { useState } from 'react';
import styles from '../styles/Form.module.scss';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';


const Form = () => {
    const [file, setFile] = useState(null);
    const [page, setPage] = useState(0);
    const [videoData, setVideoData] = useState({
        title: "",
        date: "",
        time: "",
        location: "",
    });
    const display = () => {
        switch (page) {
            case 0:
                return <FirstPage videoData={videoData} setVideoData={setVideoData} setPage={setPage} file={file} setFile={setFile} />;

            case 1:
                return <SecondPage page={page} setPage={setPage}/>;

            case 2:
                return <ThirdPage videoData={videoData} file={file}/>

            default:
                return <FirstPage videoData={videoData} setVideoData={setVideoData} setPage={setPage} file={file} setFile={setFile} />;
        }
    }

    return (
        <div className={styles.pageContainer}>
            <div className={styles.formContainer}>
                <div className={styles.formHeader}>
                    <img className={styles.logo} src="logo.png" alt="DSAID Logo" width="250" />
                </div>
                {display()}


            </div>
        </div>
    )
}

export default Form