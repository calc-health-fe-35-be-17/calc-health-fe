import axios from "axios"

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

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

  export const logoutUser = () => ({
    type: LOGOUT,
  });

  export const getDataLogin = (userData) => async (dispatch) => {
    dispatch(loginRequest());
    try {
      const response = await axios.post('http://calc-health-be.up.railway.app/auth/login', {
        email: userData.email,
        password: userData.password
      });
  
      console.log(response.data);
      
      // Dispatch action loginSuccess dengan payload data pengguna
      dispatch(loginSuccess(response.data));
      // Mengembalikan respons dengan properti payload
      return { success: true, payload: response.data };
    } catch (error) {
      console.error(error);
  
      // Dispatch action loginFailure dengan payload error
      dispatch(loginFailure(error.message));

      // Mengembalikan respons dengan properti payload
      return { success: false, payload: error.message };
    }
  };
  // export const getDataLogin = (userData) => {
  //   return (dispatch) => {
  //     dispatch(loginRequest());
  
  //     axios.post('http://calc-health-be.up.railway.app/auth/login', userData)
  //       .then(response => {
  //         const userData = response.data;
  
  //         dispatch(loginSuccess(userData));
  //       })
  //       .catch(error => {
  //         dispatch(loginFailure(error.message));
  //         console.error("Error during login:", error);
  //       });
  //   };
  // };