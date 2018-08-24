import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { BOIL_TYPES } from '../../config/constans';
import { styles } from './style';

let timer;

class Main extends Component {
  handleStartStopPress = () => {
    const { isOn, startTimer, stopTimer, timerTick } = this.props;

    if (isOn) {
      stopTimer();
      clearInterval(timer);
    } else {
      startTimer(Date.now());
      timer = setInterval(() => timerTick(), 1000);
    }
  };

  handleSelectBoilType = type => {
    const { selectBoilType } = this.props;
    selectBoilType(type);
  };

  render() {
    const { boilType, isOn, timeLeft } = this.props;

    const rawMinutes = Math.floor(timeLeft / 60);
    const minutes = rawMinutes < 10 ? `0${rawMinutes}` : `${rawMinutes}`;

    const rawSeconds = timeLeft - rawMinutes * 60;
    const seconds = rawSeconds < 10 ? `0${rawSeconds}` : `${rawSeconds}`;

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}>EGG</Text>
          <Text style={styles.title}>OO</Text>
          <Text style={styles.title}>k</Text>
        </View>
        <Text style={styles.text}>Wybierz sposób ugotowania jajka</Text>
        <Picker enabled={!isOn} style={styles.picker} selectedValue={boilType} onValueChange={boilType => this.handleSelectBoilType(boilType)}>
          {BOIL_TYPES.map(t => (
            <Picker.Item key={t.name} label={t.name} value={t} />
          ))}
        </Picker>
        <TouchableOpacity onPress={this.handleStartStopPress} style={styles.button}>
          <Text style={styles.text}>{isOn ? 'Stop' : 'Start'}</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Pozostały czas:</Text>
        <Text style={styles.timer}>{`${minutes}:${seconds}`}</Text>
      </View>
    );
  }
}

Main.propTypes = {
  boilType: PropTypes.string.isRequired,
  selectBoilType: PropTypes.func.isRequired,
  timeLeft: PropTypes.number.isRequired,
  isOn: PropTypes.bool.isRequired,
  startTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
  timerTick: PropTypes.func.isRequired,
};

export default Main;
