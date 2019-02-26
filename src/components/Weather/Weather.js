import React from 'react';
import _isEmpty from 'lodash/isEmpty';
import CitiesControl from '../CitiesControl/CitiesControl';
import CurrentWeather from '../CurrentWeather/CurrentWeather';

import styles from './Weather.module.scss';

const Weather = ({
    citiesList,
    fetchCities,
    activeCity,
    noResults,
    resetResults,
    getWeather,
    weatherInfo,
    showCitiesList
 }) => {
    return (
        <div className={styles.Weather}>
            <h1>Weather App</h1>
            <CitiesControl
                citiesList={citiesList}
                fetchCities={fetchCities}
                activeCity={activeCity}
                noResults={noResults}
                resetResults={resetResults}
                getWeather={getWeather}
                showCitiesList={showCitiesList}
            />
            {!_isEmpty(weatherInfo) ?
                <CurrentWeather
                    activeCity={activeCity}
                    weatherInfo={weatherInfo}
                /> : null
            }
        </div>
    );
}

export default Weather;