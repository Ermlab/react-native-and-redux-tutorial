import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, TouchableOpacity } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
    flex: 1,
  },
  text: {
    fontSize: 25,
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 20,
    paddingHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  timer: {
    fontSize: 40,
    fontWeight: '500',
    flex: 3,
  },
  picker: {
    height: 50,
    width: 250,
  },
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
    };
  }

  render() {
    const { type } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>EGGook</Text>
        <Text style={styles.text}>Wybierz sposób ugotowania jajka</Text>
        <Picker style={styles.picker} selectedValue={type} onValueChange={itemValue => this.setState({ type: itemValue })}>
          <Picker.Item label="Na twardo" value="hard" />
          <Picker.Item label="Średnio" value="medium" />
          <Picker.Item label="Miękko" value="soft" />
        </Picker>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Start</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Pozostały czas:</Text>
        <Text style={styles.timer}>21:12</Text>
      </View>
    );
  }
}

export default Main;
