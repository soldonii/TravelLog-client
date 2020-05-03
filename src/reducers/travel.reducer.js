import {
  CRAWLING_START,
  CRAWLING_SUCCESS,
  // CRAWLING_FAILED,
  // CRAWLING_ERROR,
  ADD_FLIGHT_TO_STACK,
  ADD_ACCOMODATION_TO_STACK,
  SELECT_FLIGHT_TICKET,
  DESELECT_FLIGHT_TICKET,
  SELECT_ACCOMODATION,
  DESELECT_ACCOMODATION,
  SAVE_TRAVEL_ID
} from '../constants/index';

const initialState = {
  loading: false,
  error: null,
  kayakData: [],
  airbnbData: [],
  flightStack: [],
  accomodationStack: [],
  boughtFlight: {},
  boughtAccomodation: {},
  travelCountry: '',
  travelDayList: [],
  travelId: ''
};

const travelReducer = (state = initialState, action) => {
  switch (action.type) {
    case CRAWLING_START:
      return {
        ...state,
        loading: true
      };

    case CRAWLING_SUCCESS:
      return {
        ...state,
        loading: false,
        kayakData: action.kayak,
        airbnbData: action.airbnb,
        travelCountry: action.country,
        travelDayList: action.travelDayList
      };

    case ADD_FLIGHT_TO_STACK:
      const flightInStack = state.flightStack
        .find(item => JSON.stringify(item) === JSON.stringify(action.flight));
      const flightStack = flightInStack ?
        state.flightStack : [ ...state.flightStack, action.flight ];

      return {
        ...state,
        flightStack
      };

    case ADD_ACCOMODATION_TO_STACK:
      const accomodationInStack = state.accomodationStack
        .find(item => JSON.stringify(item) === JSON.stringify(action.accomodation));
      const accomodationStack = accomodationInStack ?
        state.accomodationStack : [ ...state.accomodationStack, action.accomodation ];

      return {
        ...state,
        accomodationStack
      };

    case SELECT_FLIGHT_TICKET:
      return {
        ...state,
        boughtFlight: action.flight
      };

    case DESELECT_FLIGHT_TICKET:
      return {
        ...state,
        boughtFlight: {}
      };

    case SELECT_ACCOMODATION:
      return {
        ...state,
        boughtAccomodation: action.accomodation
      };

    case DESELECT_ACCOMODATION:
      return {
        ...state,
        boughtAccomodation: {}
      };

    case SAVE_TRAVEL_ID:
      return {
        ...state,
        travelId: action.travelId
      };


    default:
      return state;
  }
};

export default travelReducer;


