import { combineReducers } from 'redux';
import modalReducer from './modal/reducer';

const appReducer = combineReducers({
  modal: modalReducer,
});

export default appReducer;
