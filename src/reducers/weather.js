import { composeReducer } from 'redux-compose-reducer';

const initialState = {
    weatherInfo: {},
    weatherSuccess: true
}

function weatherSuccess(state, { weatherInfo }) {
    return {
        ...state,
        weatherInfo,
        weatherSuccess: true
    }
}

export default composeReducer(
    'weather',
    {
        weatherSuccess
    },
    initialState
);