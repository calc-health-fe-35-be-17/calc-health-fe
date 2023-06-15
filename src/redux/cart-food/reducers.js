import { FETCH_FOOD_AT_CART, STORE_FOOD_TO_CART } from "./action-type";

const initialstate = {
    data: [],
    length: 0
}

export const cartFoodReducer = (state = initialstate, action) => {
    switch (action.type) {
      case STORE_FOOD_TO_CART:
        return {
            data: [...state.data, action.payload],
            length: length + 1,
        };
      case FETCH_FOOD_AT_CART:
        return {
          data: state.data,
        };
      default:
        return state;
    }
  };