import React from 'react';
import paths from '../../constants/paths';

import styles from './CurrentWeather.module.scss';

const CurrentWeather = ({
    activeCity: { city },
    weatherInfo: { temp, humidity, icon, description, name } }) => (
        <div className={styles.CurrentWeather}>
            <div className={styles.Container}>
                <div><span>City: </span>{city || name}</div>
                <div>{description}</div>
                <div><img alt={description} src={`${paths.weatherAssets}${icon}.png`} /></div>
                <div><span>Temp: </span>{temp} °C</div>
                <div><span>Humidity: </span>{humidity} %</div>
            </div>
        </div>
    );

export default CurrentWeather;