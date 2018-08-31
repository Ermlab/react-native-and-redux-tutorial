import React from 'react';
import { Provider } from 'react-redux';
import { Font } from 'expo';
import { View } from 'react-native';
import { configureStore } from './src/config/store';
import MainScreen from './src/containers/Main';

const store = configureStore();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      font: require('./assets/CaveatBrush-Regular.ttf'),
    });
    this.setState({
      isLoading: false,
    });
  }

  render() {
    if (this.state.isLoading) {
      return null;
    }

    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );
  }
}
