import { createTypes } from 'redux-compose-reducer';

export const APP_TYPES = createTypes('appState', [
    'setLoading'
]);

export const setLoading = loading => ({
    type: APP_TYPES.setLoading,
    loading
})