import { combineReducers } from 'redux';
import timer from '../modules/timer/reducer';

const rootReducer = combineReducers({
  timer,
});

export default rootReducer;
