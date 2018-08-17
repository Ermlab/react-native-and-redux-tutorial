import * as actionTypes from './actionTypes';

export const selectBoilType = type => ({
  type: actionTypes.SELECT_BOIL_TYPE,
  payload: type,
});

export const startTimer = startedTime => ({
  type: actionTypes.START_TIMER,
  payload: startedTime,
});

export const stopTimer = () => ({
  type: actionTypes.STOP_TIMER,
});

export const timerTick = () => ({
  type: actionTypes.TIMER_TICK,
});
