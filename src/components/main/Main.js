import React from 'react';
import { View, Text } from 'react-native';

const Main = () => (
  <View style={styles.container}>
    <Text style={styles.title}>EGGook</Text>
    <Text style={styles.text}>Wybierz sposób ugotowania jajka</Text>
    <Text style={styles.button}>Start</Text>
    <Text style={styles.text}>Pozostały czas:</Text>
    <Text style={styles.timer}>21:12</Text>
  </View>
);

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
    flex: 3,
  },
  text: {
    fontSize: 25,
    flex: 1,
  },
  button: {
    backgroundColor: 'red',
    fontSize: 40,
    flex: 1,
  },
  timer: {
    fontSize: 40,
    fontWeight: '500',
    flex: 3,
  },
};

export default Main;
