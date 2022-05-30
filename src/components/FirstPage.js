
import React from 'react';
import styles from '../styles/FirstPage.module.scss';

const FirstPage = ({ videoData, setVideoData, setPage, file, setFile }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        setPage(1);
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input className={styles.fileInput} id="fileUpload" type="file" name="video" accept="video/mp4" onChange={(e) => { setFile(e.target.files[0]) }} />



                {file &&
                    (<div>
                        <video height="200" controls src={URL.createObjectURL(file) + '#t=20'} preload="metadata" className={styles.thumbnail}/>
                        <label htmlFor="videoTitle" className={styles.label}>Video Title</label>
                        <input className={styles.inputs} id="videoTitle" type="text" value={videoData.title} onChange={(e) => { setVideoData({ ...videoData, title: e.target.value }); }} required />

                        <label htmlFor="videoDate" className={styles.label}>Video Start Date</label>
                        <input className={styles.inputs} id="videoDate" type="date" value={videoData.date} onChange={(e) => { setVideoData({ ...videoData, date: e.target.value }); }} required
                            pattern="^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$"
                        />

                        <label htmlFor="videoTime" className={styles.label}>Video Start Time</label>
                        <input className={styles.inputs} id="videoTime" type="time" value={videoData.time} onChange={(e) => { setVideoData({ ...videoData, time: e.target.value }); }} required
                            pattern="^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$"
                        />

                        <label htmlFor="videoLocation" className={styles.label}>Postal Code</label>
                        <input className={styles.inputs} id="videoLocation" type="number" value={videoData.location} onChange={(e) => { setVideoData({ ...videoData, location: e.target.value }); }}
                            pattern="\b\d{6}\b"
                        />

                        <input type="submit" value="Submit" className={styles.submitButton}/>
                    </div>)}
            </form>
        </div >
    )
}

export default FirstPage