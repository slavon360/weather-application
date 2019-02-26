import { composeReducer } from 'redux-compose-reducer';

const initialState = {
    citiesList: [],
    activeCity: {},
    noResults: false,
    showCitiesList: false
}

function fetchCities(state, { citiesList }) {
    return {
        ...state,
        citiesList,
        noResults: false,
        showCitiesList: true
    }
}

function noResults(state) {
    return {
        ...state,
        noResults: true,
        showCitiesList: false
    }
}

function resetResults(state) {
    return {
        ...state,
        noResults: true,
        citiesList: [],
        showCitiesList: false
    }
}

function setActiveCity(state, { cityName }) {
    const activeCity = state.citiesList.reduce((result, current) => {
        if (current.city === cityName) {
            result = { ...current };
        }
        return result;
    }, {});
    return {
        ...state,
        activeCity
    }
}

function setCitiesVisibility(state, { showCitiesList }) {
    return {
        ...state,
        showCitiesList
    }
}

export default composeReducer(
    'cities',
    {
        fetchCities,
        noResults,
        resetResults,
        setActiveCity,
        setCitiesVisibility
    },
    initialState
);