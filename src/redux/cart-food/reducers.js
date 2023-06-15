import { RESET_FOOD_AT_CART, STORE_FOOD_TO_CART } from './action-type';

const initialstate = {
  data: [],
  length: 0,
};

export const cartFoodReducer = (state = initialstate, action) => {
  switch (action.type) {
    case STORE_FOOD_TO_CART:
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
