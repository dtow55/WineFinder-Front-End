import { combineReducers } from 'redux';
import winesReducer from './winesReducer';

export const rootReducer = combineReducers({
  wines: winesReducer
});