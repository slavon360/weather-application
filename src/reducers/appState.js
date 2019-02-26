import { composeReducer } from 'redux-compose-reducer';

const initialState = {
    loading: false
}

function setLoading(state, { loading }) {
    return {
        ...state,
        loading
    }
}

export default composeReducer(
    'appState',
    {
        setLoading
    },
    initialState
);