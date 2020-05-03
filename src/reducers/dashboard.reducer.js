import {
  GET_INITIAL_DATA_PENDING,
  GET_INITIAL_DATA_SUCCESS,
  GET_INITIAL_DATA_FAILED,
  // SAVE_TRAVEL_INFORMATION,
  // GET_CURRENCY
} from '../constants/index';

const initialState = {
  loading: '',
  error: null,
  travelCountry: '',
  spendingByDates: [],
  currencyExchange: '',
  currencyCode: ''
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INITIAL_DATA_PENDING:
      return {
        ...state,
        loading: true
      };

    case GET_INITIAL_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        travelCountry: action.travelCountry,
        spendingByDates: action.spendingByDates,
        currencyExchange: action.currencyExchange,
        currencyCode: action.currencyCode
      };

    case GET_INITIAL_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
}

export default dashboardReducer;
