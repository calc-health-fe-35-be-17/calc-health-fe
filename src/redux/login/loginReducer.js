import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './loginAction';

const initialState = {
  loading: false,
  userData: null,
  error: null
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
        error: null
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        userData: null,
        error: action.payload
      };
    default:
      return state;
  }
};

export default loginReducer;


// import { FETCHING, GET_DATA } from "./loginAction"

// const initialState = {
//     user : [],
//     isLoading : false
// }

// const loginReducer = (state = initialState, action) => {
//     switch(action.type){
//         case FETCHING :
//             return{
//                 ...state,
//                 isLoading : true
//             }
//         case GET_DATA :
//             return{
//                 isLoading : false,
//                 user : [...action.payload]
//             }
//         default: return state
//     }
// }

// export default loginReducer
