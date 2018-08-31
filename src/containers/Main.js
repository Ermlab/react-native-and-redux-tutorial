import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Main from '../components/main/Main';
import { selectBoilType, startTimer, stopTimer, timerTick, notify } from '../modules/timer/actions';

class MainScreen extends Component {
  render() {
    return <Main {...this.props} />;
  }
}

Main.propTypes = {};

const mapStateToProps = state => ({
  isOn: state.timer.isOn,
  timeLeft: state.timer.timeLeft,
  boilType: state.timer.boilType,
  eggBoiled: state.timer.eggBoiled,
});

const mapDispatchToProps = dispatch => bindActionCreators({ selectBoilType, startTimer, stopTimer, timerTick, notify }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreen);
