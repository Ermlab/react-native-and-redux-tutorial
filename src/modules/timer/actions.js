import * as actionTypes from './actionTypes';

export const selectBoilType = type => ({
  type: actionTypes.SELECT_BOIL_TYPE,
  payload: type,
});

export const startTimer = () => ({
  type: actionTypes.START_TIMER,
});

export const stopTimer = () => ({
  type: actionTypes.STOP_TIMER,
});

export const timerTick = time => ({
  type: actionTypes.TIMER_TICK,
  payload: time,
});
