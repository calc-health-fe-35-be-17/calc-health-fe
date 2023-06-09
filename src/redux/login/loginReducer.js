import { FETCHING, GET_DATA } from "./loginAction"

const initialState = {
    user : [],
    isLoading : false
}

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING :
            return{
                ...state,
                isLoading : true
            }
        case GET_DATA :
            return{
                isLoading : false,
                user : [...action.payload]
            }
        default: return state
    }
}

export default loginReducer

// import {LOGIN_SUCCESS, LOGIN_FAILURE} from "./loginAction"

// const initialState = {
//     user: null,
//     error: null,
// }

// const loginReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case LOGIN_SUCCESS:
//             return {
//                 ...state,
//                 user: action.payload,
//                 error: null,
//             };
//         case LOGIN_FAILURE:
//             return {
//             ...state,
//             user: null,
//             error: action.payload,
//         };
//         default:
//             return state;
//     }
// }

// export default loginReducer;