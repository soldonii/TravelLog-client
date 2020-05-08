import axios from 'axios';
import {
  CRAWLING_START,
  CRAWLING_SUCCESS,
  CRAWLING_FAILED,
  CLEAR_ERROR,
  ADD_FLIGHT_TO_STACK,
  ADD_ACCOMODATION_TO_STACK,
  SELECT_FLIGHT_TICKET,
  DESELECT_FLIGHT_TICKET,
  SELECT_ACCOMODATION,
  DESELECT_ACCOMODATION,
  SAVE_TRAVEL_ID,
  GET_TRAVELDATA_PENDING,
  GET_TRAVELDATA_SUCCESS,
  GET_TRAVELDATA_FAILED,
  CHANGE_TRAVELID,
  GET_INITIAL_DATA_PENDING,
  GET_INITIAL_DATA_SUCCESS,
  GET_INITIAL_DATA_FAILED,
} from '../constants/index';

import { setTokenToHeader, getDayList, getDefaultLatLng } from '../lib/index';
import history from '../lib/history';

export const requestCrawling = dispatch => async (country, city, travelDates) => {
  const token = localStorage.getItem('token');
  setTokenToHeader(token);

  try {
    dispatch({ type: CRAWLING_START });

    const kayakResponse = await axios.post(`${process.env.REACT_APP_SERVER_URI}/travel/kayak`, {
      country,
      city,
      travelDates
    });

    if (kayakResponse.status === 200) {
      const airbnbResponse = await axios.post(`${process.env.REACT_APP_SERVER_URI}/travel/airbnb`, {
        city,
        travelDates
      });

      const { kayak } = kayakResponse.data;
      const { airbnb } = airbnbResponse.data;
      const travelDayList = getDayList(travelDates);

      dispatch({ type: CRAWLING_SUCCESS, kayak, airbnb, country, travelDayList });
    }
  } catch (err) {
    dispatch({ type: CRAWLING_FAILED, error: err.response.data.errorMessage });
  }
};

export const clearError = dispatch => () => {
  dispatch({ type: CLEAR_ERROR });
};

export const addFlightToStack = dispatch => (flightInfo, selectedOption) => {
  const finalInfo = { ...flightInfo, priceAndProviderWithLinks: [ selectedOption ] };

  dispatch({ type: ADD_FLIGHT_TO_STACK, flight: finalInfo });
};

export const addAccomodationToStack = dispatch => (description, title, price, image) => {
  const finalPrice = price.length === 1 ? price[0] : price[1];
  const accomodation = { description, title, price: finalPrice, image };

  dispatch({ type: ADD_ACCOMODATION_TO_STACK, accomodation });
};

export const selectFlightTicket = dispatch => flight => {
  dispatch({ type: SELECT_FLIGHT_TICKET, flight });
};

export const deselectFlightTicket = dispatch => () => {
  dispatch({ type: DESELECT_FLIGHT_TICKET });
};

export const selectAccomodation = dispatch => accomodation => {
  dispatch({ type: SELECT_ACCOMODATION, accomodation });
};

export const deselectAccomodation = dispatch => () => {
  dispatch({ type: DESELECT_ACCOMODATION });
};

export const saveTravelId = dispatch => travelId => {
  dispatch({ type: SAVE_TRAVEL_ID, travelId });
};

export const getAllTravelData = dispatch => async () => {
  const token = localStorage.getItem('token');
  setTokenToHeader(token);

  dispatch({ type: GET_TRAVELDATA_PENDING });

  try {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URI}/travel`);
    const { allTravels } = response.data;

    dispatch({ type: GET_TRAVELDATA_SUCCESS, allTravels });
  } catch (err) {
    dispatch({ type: GET_TRAVELDATA_FAILED, error: err.response.data.errorMessage });
  }
};

export const changeTravelId = dispatch => async (travelId, userId) => {
  const token = localStorage.getItem('token');
  setTokenToHeader(token);

  try {
    dispatch({ type: GET_INITIAL_DATA_PENDING });

    dispatch({ type: CHANGE_TRAVELID, travelId })

    const response = await axios.get(`${process.env.REACT_APP_SERVER_URI}/dashboard`, {
      params: { travelId }
    });

    const { travelCountry, spendingByDates, currencyExchange, currencyCode } = response.data;
    const defaultLatLng = getDefaultLatLng(travelCountry);

    dispatch({
      type: GET_INITIAL_DATA_SUCCESS,
      travelCountry,
      spendingByDates,
      currencyExchange,
      currencyCode,
      defaultLatLng
    });

    history.push(`/users/${userId}/dashboard/${travelId}`);
  } catch (err) {
    dispatch({ type: GET_INITIAL_DATA_FAILED, error: err.response.data.errorMessage });
  }
};
