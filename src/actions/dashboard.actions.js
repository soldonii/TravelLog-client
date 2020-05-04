import axios from 'axios';
import {
  GET_INITIAL_DATA_PENDING,
  GET_INITIAL_DATA_SUCCESS,
  GET_INITIAL_DATA_FAILED,
  REGISTER_SPENDING_PENDING,
  REGISTER_SPENDING_SUCCESS,
  REGISTER_SPENDING_FAILED
} from '../constants/index';

import { setTokenToHeader, getDefaultLatLng } from '../lib/index';

export const getInitialData = dispatch => async travelId => {
  const token = localStorage.getItem('token');
  setTokenToHeader(token);

  try {
    dispatch({ type: GET_INITIAL_DATA_PENDING });

    const response = await axios.get(`${process.env.REACT_APP_SERVER_URI}/dashboard`, {
      params: { travelId }
    });

    const { travelCountry, spendingByDates, currencyExchange, currencyCode } = response.data;
    // 여기서 나라를 기준으로 coordinates 구하기
    const defaultLatLng = getDefaultLatLng(travelCountry);

    dispatch({type: GET_INITIAL_DATA_SUCCESS,
      travelCountry,
      spendingByDates,
      currencyExchange,
      currencyCode,
      defaultLatLng
    });
  } catch (err) {
    dispatch({ type: GET_INITIAL_DATA_FAILED, error: err.response.data.errorMessage });
  }
};

export const registerSpending = dispatch => async data => {
  const token = localStorage.getItem('token');
  setTokenToHeader(token);

  dispatch({ type: REGISTER_SPENDING_PENDING });

  try {
    const response = await axios.put(`${process.env.REACT_APP_SERVER_URI}/dashboard`, { data });
    const { spendingByDates } = response.data;

    dispatch({ type: REGISTER_SPENDING_SUCCESS, spendingByDates });
  } catch (error) {
    dispatch({ type: REGISTER_SPENDING_FAILED })
  }
};

