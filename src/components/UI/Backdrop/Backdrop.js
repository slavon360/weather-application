import React from 'react';
import cx from 'classnames';

import styles from './Backdrop.module.scss';

const Backdrop = ({ show, clicked, clsName }) => (
    show ? <div
                    className={cx(styles.Backdrop, clsName)}
                    onClick={clicked}></div> : null
);

export default Backdrop;
