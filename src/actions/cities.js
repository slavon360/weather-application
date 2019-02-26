import { createTypes } from 'redux-compose-reducer';
import paths from '../constants/paths';
import axios from 'axios';
import _get from 'lodash/get';

export const CITIES_TYPES = createTypes('cities', [
    'fetchCities',
    'noResults',
    'resetResults',
    'setCitiesVisibility'
]);

export const APP_TYPES = createTypes('appState', [
    'setLoading'
]);

export const fetchCities = (name) => async (dispatch) => {
    dispatch({ type: APP_TYPES.setLoading, loading: true });
    const json = await axios.get(`${paths.geoDB}?namePrefix=${name}&limit=5&offset=0&hateoasMode=false`);
    const citiesList = _get(json, 'data.data', []);
    dispatch({ type: CITIES_TYPES.fetchCities, citiesList })
    if (!citiesList.length) dispatch({ type: CITIES_TYPES.noResults });
    dispatch({ type: APP_TYPES.setLoading, loading: false });
}

export const setCitiesVisibility = val => ({
    type: CITIES_TYPES.setCitiesVisibility,
    showCitiesList: val
})

export const resetResults = () => ({
    type: CITIES_TYPES.resetResults
})