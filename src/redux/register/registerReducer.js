import { START_FETCHING, SUCCESS_GET_DATA } from "./registerAction"

const initialState = {
    user : [],
    isLoading : false
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case START_FETCHING :
            return{
                ...state,
                isLoading : true
            }
        case SUCCESS_GET_DATA :
            return{
                isLoading : false,
                user : [...action.payload]
            }
        default: return state
    }
}

export default userReducer;