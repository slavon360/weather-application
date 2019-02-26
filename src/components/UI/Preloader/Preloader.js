import React from 'react';

import styles from './Preloader.module.scss';

const Preloader = () => (
        <div className={styles.Preloader}>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );

export default Preloader;