import axios from 'axios';
import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  // CLEAR_AUTH_ERROR
} from '../constants/index';

import history from '../lib/history';

export const requestLogin = dispatch => async userInfo => {
  try {
    dispatch({ type: LOGIN_PENDING });

    const response = await axios.post(`${process.env.REACT_APP_SERVER_URI}/auth/login`, userInfo);
    const { userId, token, nickname, profile_image: profileImage } = response.data;

    localStorage.setItem('token', token);

    dispatch({ type: LOGIN_SUCCESS, userId, token, nickname, profileImage });
  } catch (err) {
    dispatch({ type: LOGIN_FAILED, error: err.response.data.errorMessage });
  }
};

export const logout = dispatch => () => {
  localStorage.removeItem('token');
  history.push('/');

  dispatch({ type: LOGOUT });
};

// export const clearError = dispatch => () => {
//   dispatch({ type: CLEAR_AUTH_ERROR });
// };