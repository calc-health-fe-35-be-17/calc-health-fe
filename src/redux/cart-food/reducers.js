/* eslint-disable no-case-declarations */
import {
  FETCH_FOOD_AT_CART,
  RESET_FOOD_AT_CART,
  STORE_FOOD_TO_CART,
} from './action-type';

const initialstate = {
  data: [],
  length: 0,
};

export const cartFoodReducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_FOOD_AT_CART:
      return {
        data: JSON.parse(localStorage.getItem('cart-food')),
        length: JSON.parse(localStorage.getItem('cart-food')).length,
      };
    case STORE_FOOD_TO_CART:
      localStorage.setItem(
        'cart-food',
        JSON.stringify([...state.data, action.payload])
      );
      return {
        data: [...state.data, action.payload],
        length: state.length + 1,
      };
    case RESET_FOOD_AT_CART:
      const newData = state.data.filter(value => value.id != action.payload);
      localStorage.setItem('cart-food', JSON.stringify(newData));
      return {
        data: newData,
        length: newData.length,
      };
    default:
      return state;
  }
};
