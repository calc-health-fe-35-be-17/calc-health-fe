import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { reducer } from './Foods/reducers';

const rootreducer = combineReducers({ listFood: reducer });

const store = configureStore({
  reducer: rootreducer,
  middleware: [logger, thunk],
});
export default store;
