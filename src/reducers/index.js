import { combineReducers } from 'redux';
import winesReducer from './winesReducer';
import storesReducer from './winesReducer';

export const rootReducer = combineReducers({
  wines: winesReducer, 
  stores: storesReducer
});