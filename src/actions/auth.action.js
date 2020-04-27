import axios from 'axios';
import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  // LOGOUT,
  // CLEAR_AUTH_ERROR
} from '../constants/index';
import setTokenToHeader from '../lib/auth';

export const requestLogin = dispatch => async userInfo => {
  try {
    dispatch({ type: LOGIN_PENDING });

    const response = await axios.post(`${process.env.REACT_APP_SERVER_URI}/auth/login`, userInfo);
    const { token, nickname, profile_image: profileImage } = response.data;

    setTokenToHeader(token);

    dispatch({ type: LOGIN_SUCCESS, token, nickname, profileImage });
  } catch (err) {
    dispatch({ type: LOGIN_FAILED, error: err.response.data.errorMessage });
  }
};
