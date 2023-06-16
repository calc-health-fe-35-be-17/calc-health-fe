import axios from 'axios';
import {
  STORE_FOOD_TO_CART,
  RESET_FOOD_AT_CART,
  FETCH_FOOD_AT_CART,
} from './action-type';

export const fetchToCart = () => {
  return {
    type: FETCH_FOOD_AT_CART,
  };
};

export const storeFoodToCart = data => {
  return {
    type: STORE_FOOD_TO_CART,
    payload: data,
  };
};

export const resetFoodToCart = id => {
  return {
    type: RESET_FOOD_AT_CART,
    payload: id,
  };
};

// const BASE_URL = 'https://api.spoonacular.com/recipes';
// const API_KEY = '9e785ae46c4146cb962cd8b41f6469a8';
// const API_KEY = '5013d654e80c45c6a0416a7e4f83c2e7';
// const API_KEY = '4da635c6a35347ce8cce85199806fd80';
// const INC_NUTRITION = 'includeNutrition=true';

export const storeToCart = ({ id }) => {
  return async dispatch => {
    try {
      const response = await axios.get(
        // `${BASE_URL}/${id}/information?apiKey=${API_KEY}&${INC_NUTRITION}`
        `https://calc-health-be.up.railway.app/api/food/${id}`
      );
      const data = await response.data;
      dispatch(storeFoodToCart(data));
    } catch (e) {
      console.log('');
    }
  };
};

export const fetchCart = () => {
  return dispatch => {
    if (!localStorage.getItem('cart-food')) {
      return;
    }
    dispatch(fetchToCart());
  };
};

export const resetCart = id => {
  return dispatch => {
    dispatch(resetFoodToCart(id));
  };
};
