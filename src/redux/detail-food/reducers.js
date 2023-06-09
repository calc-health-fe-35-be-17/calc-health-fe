import {
  FETCH_FOOD_DETAIL_REQUEST,
  FETCH_FOOD_DETAIL_SUCCESS,
  FETCH_FOOD_DETAIL_FAILURE,
} from './action-type';

const initialstate = {
  loading: true,
  data: {},
  error: '',
};

export const detailreducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_FOOD_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FOOD_DETAIL_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case FETCH_FOOD_DETAIL_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
