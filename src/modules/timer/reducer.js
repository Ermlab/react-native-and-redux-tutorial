import * as actionTypes from './actionTypes';
import { BOIL_TYPES } from '../../config/constans';

const initialState = {
  isOn: false,
  boilType: BOIL_TYPES[0],
  timeLeft: BOIL_TYPES[0].timeInSeconds,
  startedTime: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.START_TIMER:
      return {
        ...state,
        isOn: true,
        startedTime: action.payload,
      };
    case actionTypes.TIMER_TICK: {
      const timePassedInSeconds = Math.round((Date.now() - state.startedTime) / 1000);

      const timeLeft = state.boilType.timeInSeconds - timePassedInSeconds;

      return {
        ...state,
        timeLeft,
      };
    }
    case actionTypes.STOP_TIMER:
      return {
        ...state,
        isOn: false,
        timeLeft: state.boilType.timeInSeconds,
      };
    case actionTypes.SELECT_BOIL_TYPE:
      return {
        ...state,
        boilType: action.payload,
        timeLeft: action.payload.timeInSeconds,
      };
    default:
      return {
        ...state,
      };
  }
}
