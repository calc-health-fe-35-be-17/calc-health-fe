import {
  applyMiddleware,
  combineReducers,
  configureStore,
  createStore,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { reducer } from './foods/reducers';
import { detailreducer } from './detail-food/reducers';
import userReducer from './register/registerReducer';
import loginReducer from './login/loginReducer';

const rootreducer = combineReducers({
  listFood: reducer,
  userReducer,
  detailFood: detailreducer,
  loginReducer,
});

const store = configureStore({
  reducer: rootreducer,
  middleware: [logger, thunk],
});
export default store;
