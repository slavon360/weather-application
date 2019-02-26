import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Weather from './containers/Weather/Weather';
import Layer from './components/Layer/Layer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layer>
          <Weather />
        </Layer>
      </Provider>
    );
  }
}

export default App;
