import axios from "axios"

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = () => ({
    type: LOGIN_REQUEST
  });
  
  export const loginSuccess = (userData) => ({
    type: LOGIN_SUCCESS,
    payload: userData
  });
  
  export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error
  });
  
  export const getDataLogin = (userData) => {
    return (dispatch) => {
      dispatch(loginRequest());
  
      axios.get('https://6453e133c18adbbdfeaa2b38.mockapi.io/api/v1/data-user', userData)
        .then(response => {
          const userData = response.data;
  
          dispatch(loginSuccess(userData));
        })
        .catch(error => {
          dispatch(loginFailure('Invalid email or password'));
        });
    };
  };

// export const FETCHING = "FETCHING"
// export const GET_DATA = "GET_DATA"

// const fetching = () => {
//     return{
//         type : FETCHING,
//     }
// }

// const getData = (payload) => {
//     return{
//         type : GET_DATA,
//         payload
//     }
// }

// export const getDataLogin = () => {
//     return async (dispatch) => {
//         dispatch(fetching())

//         // sementara
//         const url = "https://6453e133c18adbbdfeaa2b38.mockapi.io/api/v1/data-user"
//         const result = await axios(url)

//         dispatch(getData(result.data))
//     }
// }

