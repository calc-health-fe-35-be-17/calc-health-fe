import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const login = (email, password) => {
  return async dispatch => {
    dispatch(loginRequest());

    try {
      const response = await fetch(
        'https://calc-health-be.up.railway.app/auth/login',
        {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        const user = await response.json();
        dispatch(loginSuccess(user));
        localStorage.setItem('token', JSON.stringify(user));
      } else {
        const error = await response.json();
        dispatch(loginFailure(error));
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};

export const checkLogin = () => {
  return dispatch => {
    const user = localStorage.getItem('token');
    if (user) {
      dispatch(loginSuccess(user));
      return;
    }
    dispatch(loginSuccess(null));
  };
};
export const logoutAction = () => {
  return dispatch => {
    localStorage.removeItem('token');
    dispatch(loginSuccess(null));
  };
};
