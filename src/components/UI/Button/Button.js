import React from 'react';
import cx from 'classnames';
import styles from './Button.module.scss';

const Button = ({ children, clickHandler, clsName, ...rest }) => (
        <button
            onClick={clickHandler}
            className={cx(styles.Button, clsName)}
            {...rest}
        >
            {children}
        </button>
    );

export default Button;