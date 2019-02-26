import { createTypes } from 'redux-compose-reducer';
import axios from 'axios';
import paths from '../constants/paths';

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
    const json = await axios.get(`${paths.weatherAPI}?q=${city}&units=metric&APPID=8d9223b647133c51d397626dcaa319ce`);
    if (json.data.cod === 200) {
        const { main, weather, name } = json.data;
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
    }
}