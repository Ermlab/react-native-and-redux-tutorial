import * as actionTypes from './actionTypes';

const initialState = {
  isOn: false,
  time: null,
  boilType: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.START_TIMER:
      return {
        ...state,
        isOn: true,
        time: action.time,
      };
    case actionTypes.STOP_TIMER:
      return {
        ...state,
        isOn: false,
      };
    case actionTypes.SELECT_BOIL_TYPE:
      return {
        boilType: action.boilType,
      };
    default:
      return {
        ...state,
      };
  }
}
