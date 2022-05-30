import React, { useState } from 'react'
import styles from '../styles/SecondPage.module.scss';

const SecondPage = ({ page, setPage }) => {
    const [checkbox, setCheckbox] = useState(false);

    return (
        <div className={styles.container} style={{ display: (page === 1 ? 'block' : 'none') }}>
            <p className={styles.termsAndConditions}>By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions.
                If you do not agree to these Terms and Conditions, please do not use this site.
                PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time.
                Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically.
                Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised
                Terms and Conditions and the reasonableness of these standards for notice of changes.
                For your information, this page was last updated as of the date at the top of these terms and conditions.</p>

            <div className={styles.acceptDiv}>
                <input type="checkbox" id="termsAndConditions" onChange={() => setCheckbox(prevState => !prevState)} />
                <label className={styles.accept} htmlFor="termsAndConditions">Accept</label>
            </div>
            <div className={styles.buttonDiv}>
                <button className={styles.backButton} onClick={() => { setPage(0) }}>Back</button>
                <button className={styles.uploadButton} disabled={!checkbox} onClick={() => { setPage(2) }}>Upload</button>
            </div>

        </div>
    )
}

export default SecondPage