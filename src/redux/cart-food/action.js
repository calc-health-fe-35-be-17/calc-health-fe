import { FETCH_FOOD_AT_CART, STORE_FOOD_TO_CART } from "./action-type"

export const storeFoodToCart = (data) => {
    return {
        type: STORE_FOOD_TO_CART,
        payload: data
    }
}

export const fetchFoodAtCart = () => {
    return {
        type: FETCH_FOOD_AT_CART
    }
}

export const storeFoodtoCart = (data) => {
    return async dispatch => {
        dispatch(storeFoodToCart(data));
    };
  };

