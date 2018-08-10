import * as actionTypes from './actionTypes';

export const selectBoilType = type => ({
  type: actionTypes.SELECT_BOIL_TYPE,
});

export const startTimer = time => ({
  type: actionTypes.START_TIMER,
});

export const stopTimer = () => ({
  type: actionTypes.STOP_TIMER,
});

export const timerTick = () => ({
  type: actionTypes.TIMER_TICK,
});
