import {
  FETCH_FOOD_REQUEST,
  FETCH_FOOD_SUCCESS,
  FETCH_FOOD_FAILURE,
} from './actionType';

const initialstate = {
  loading: true,
  data: [],
  error: '',
};

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_FOOD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FOOD_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case FETCH_FOOD_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
