import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './src/config/store';
import MainScreen from './src/containers/Main';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );
  }
}
