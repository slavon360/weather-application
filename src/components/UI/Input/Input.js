import React from 'react';
import cx from 'classnames';

import styles from './Input.module.scss';

const Input = ({ clsName, type, changeValue, ...rest }) => (
        <input
            className={cx(styles.Input, clsName)}
            type={type}
            onChange={changeValue}
            {...rest}
        />
    );

export default Input;