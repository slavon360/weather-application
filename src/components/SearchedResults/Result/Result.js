import React, { PureComponent } from 'react';
import cx from 'classnames';

import styles from './Result.module.scss';

class Result extends PureComponent{
    onGetWeather = () => {
        const { cityName, getWeather } = this.props;
        getWeather(cityName);
    }
    render() {
        const { cityName, checked, country, region } = this.props;
        return (
            <div
                className={cx(styles.Result, { [styles.Checked]: checked })}
                onClick={this.onGetWeather}
            >
                {`${cityName} | country: ${country} | region: ${region}`}
            </div>
        );
    }
}; 

export default Result;