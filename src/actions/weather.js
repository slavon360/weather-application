import { createTypes } from 'redux-compose-reducer';
import _get from 'lodash/get';
import axios from 'axios';
import paths from '../constants/paths';
import { APPID } from '../constants/keys';

export const WEATHER_TYPES = createTypes('weather', [
    'weatherSuccess'
]);

export const CITIES_TYPES = createTypes('cities', [
    'setActiveCity'
]);

export const APP_TYPES = createTypes('appState', [
    'setLoading'
]);

export const getWeather = (city) => async (dispatch) => {
    dispatch({ type: APP_TYPES.setLoading, loading: true });
    const json = await axios.get(`${paths.weatherAPI}?q=${city}&units=metric&APPID=${APPID}`);
    const data = _get(json, 'data', {});
    if (data.cod === 200) {
        const { main, weather, name } = data;
        const weatherInfo = {
            temp: main.temp,
            humidity: main.humidity,
            icon: weather[0].icon,
            description: weather[0].description,
            name
        }
        dispatch({ type: WEATHER_TYPES.weatherSuccess, weatherInfo });
        dispatch({ type: CITIES_TYPES.setActiveCity, cityName: city });
        dispatch({ type: APP_TYPES.setLoading, loading: false });
    } else if (data.cod !== 200) {
        dispatch({ type: APP_TYPES.setLoading, loading: false });
    }
}