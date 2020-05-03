import axios from 'axios';
import {
  CRAWLING_START,
  CRAWLING_SUCCESS,
  CRAWLING_FAILED,
  // CRAWLING_ERROR,
  ADD_FLIGHT_TO_STACK,
  ADD_ACCOMODATION_TO_STACK,
  SELECT_FLIGHT_TICKET,
  DESELECT_FLIGHT_TICKET,
  SELECT_ACCOMODATION,
  DESELECT_ACCOMODATION,
  SAVE_FLIGHT_AND_ACCOMODATION
} from '../constants/index';

import { setTokenToHeader, getDayList } from '../lib/index';

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

    const [ kayak, airbnb ] = response.data;
    // console.log(response.data);

    const travelDayList = getDayList(travelDates);

    dispatch({ type: CRAWLING_SUCCESS, kayak, airbnb, country, travelDayList });
  } catch (err) {
    dispatch({ type: CRAWLING_FAILED, error: err.response.data.errorMessage });
  }
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

export const saveFlightAndAccomodation = dispatch => (flight, accomodation) => {
  console.log('flight', flight);
  console.log('accomodation', accomodation);

  // const 

  const { priceAndProviderWithLinks } = flight;
  const { price: flightPrice } = priceAndProviderWithLinks[0];
  const { price: accomodationPrice } = accomodation;

  dispatch({
    type: SAVE_FLIGHT_AND_ACCOMODATION,
    flightPrice: parseInt(flightPrice.slice(0, -1).replace(',', '')),
    accomodationPrice: parseInt(accomodationPrice.replace(',', ''))
  });
};
