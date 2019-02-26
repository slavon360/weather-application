import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import cities from '../reducers/cities';
import weather from '../reducers/weather';
import appState from '../reducers/appState';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
    
const rootReducer = combineReducers({
        weather,
        cities,
        appState
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;