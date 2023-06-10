import axios from "axios"

export const FETCHING = "FETCHING"
export const GET_DATA = "GET_DATA"

const fetching = () => {
    return{
        type : FETCHING,
    }
}

const getData = (payload) => {
    return{
        type : GET_DATA,
        payload
    }
}

export const getDataLogin = () => {
    return async (dispatch) => {
        dispatch(fetching())

        // sementara
        const url = "https://6453e133c18adbbdfeaa2b38.mockapi.io/api/v1/data-user"
        const result = await axios(url)

        dispatch(getData(result.data))
    }
}

// import axios from "axios";

// export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// export const LOGIN_FAILURE = "LOGIN_FAILURE";

// export const loginUserSuccess = (user) => ({
//     type: 'LOGIN_UCCESS',
//     payload: user,
//   });
  
//   export const loginUserFailure = (error) => ({
//     type: 'LOGIN_FAILURE',
//     payload: error,
//   });
  
//   export const loginUser = (userData) => {
//     return (dispatch) => {
//       axios
//         .post('https://6453e133c18adbbdfeaa2b38.mockapi.io/api/v1/data-user', userData) // Replace '/api/login' with the actual API endpoint for login
//         .then((response) => {
//           dispatch(loginUserSuccess(response.data));
//         })
//         .catch((error) => {
//           dispatch(loginUserFailure(error.message));
//         });
//     };
//   };