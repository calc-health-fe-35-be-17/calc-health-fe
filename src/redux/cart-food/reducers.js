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
      // localStorage.setItem(
      //   'cart-food',
      //   JSON.stringify([...state.data, action.payload])
      // );
      return {
        data: [...state.data, action.payload],
        length: length + 1,
      };
    case RESET_FOOD_AT_CART:
      return {
        data: state.data.filter(value => value.id != action.payload),
      };
    default:
      return state;
  }
};
