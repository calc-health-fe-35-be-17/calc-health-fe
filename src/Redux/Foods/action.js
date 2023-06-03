import {
  FETCH_FOOD_SUCCESS,
  FETCH_FOOD_REQUEST,
  FETCH_FOOD_FAILURE,
} from './actionType';
import axios from 'axios';

const fetchFoodRequest = () => {
  return {
    type: FETCH_FOOD_REQUEST,
  };
};

const fetchFoodSuccess = data => {
  return {
    type: FETCH_FOOD_SUCCESS,
    payload: data,
  };
};

const fetchFoodFailure = error => {
  return {
    type: FETCH_FOOD_FAILURE,
    payload: error,
  };
};

const BASE_URL = 'https://api.spoonacular.com/recipes';
const API_KEY = '5013d654e80c45c6a0416a7e4f83c2e7';
// const INC_NUTRITION = 'includeNutrition=true';

export const fetchFoods = () => {
  return async dispatch => {
    try {
      dispatch(fetchFoodRequest);
      const response = await axios.get(
        `${BASE_URL}/complexSearch?apiKey=${API_KEY}&number=30`
      );
      const data = await response.data;
      dispatch(fetchFoodSuccess(data.results));
    } catch (error) {
      dispatch(fetchFoodFailure(error.message));
    }
  };
};
