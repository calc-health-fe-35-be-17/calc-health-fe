import {
  FETCH_FOOD_DETAIL_REQUEST,
  FETCH_FOOD_DETAIL_SUCCESS,
  FETCH_FOOD_DETAIL_FAILURE,
} from './action-type';
import axios from 'axios';

const fetchFoodDetailRequest = () => {
  return {
    type: FETCH_FOOD_DETAIL_REQUEST,
  };
};

const fetchFoodDetailSuccess = data => {
  return {
    type: FETCH_FOOD_DETAIL_SUCCESS,
    payload: data,
  };
};

const fetchFoodDetailFailure = error => {
  return {
    type: FETCH_FOOD_DETAIL_FAILURE,
    payload: error,
  };
};

const BASE_URL = 'https://api.spoonacular.com/recipes';
// const API_KEY = '5013d654e80c45c6a0416a7e4f83c2e7';
const API_KEY = '4da635c6a35347ce8cce85199806fd80';
const INC_NUTRITION = 'includeNutrition=true';

export const fetchFoodDetail = ({ id }) => {
  return async dispatch => {
    try {
      dispatch(fetchFoodDetailRequest);
      const response = await axios.get(
        `${BASE_URL}/${id}/information?apiKey=${API_KEY}&${INC_NUTRITION}`
      );
      const data = await response.data;
      console.log(data);
      dispatch(fetchFoodDetailSuccess(data));
    } catch (error) {
      dispatch(fetchFoodDetailFailure(error.message));
    }
  };
};
