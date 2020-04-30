import axios from 'axios';
import {
  CRAWLING_START,
  CRAWLING_SUCCESS,
  CRAWLING_FAILED,
  // CRAWLING_ERROR,
} from '../constants/index';
import setTokenToHeader from '../lib/auth';

export const requestCrawling = dispatch => async (country, city, travelDates) => {
  const token = localStorage.getItem('token');
  setTokenToHeader(token);

  try {
    dispatch({ type: CRAWLING_START });

    const response = await axios.post(`${process.env.REACT_APP_SERVER_URI}/travel`, {
      country,
      city,
      travelDates
    });

    dispatch({ type: CRAWLING_SUCCESS });
  } catch (err) {
    dispatch({ type: CRAWLING_FAILED, error: err.response.data.errorMessage });
  }
};
