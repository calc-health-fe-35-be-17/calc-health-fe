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
import { cartFoodReducer } from './cart-food/reducers';

const rootreducer = combineReducers({
  listFood: reducer,
  userReducer,
  detailFood: detailreducer,
  loginReducer,
  cartFood: cartFoodReducer,
});

const store = configureStore({
  reducer: rootreducer,
  middleware: [logger, thunk],
});
export default store;
