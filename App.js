import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { configureStore } from './src/config/store';
import { Provider } from 'react-redux';

store = configureStore();


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
        <Text>Ermlab</Text>
      </View>
      </Provider>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
