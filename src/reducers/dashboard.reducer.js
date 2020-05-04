import {
  GET_INITIAL_DATA_PENDING,
  GET_INITIAL_DATA_SUCCESS,
  GET_INITIAL_DATA_FAILED,
  REGISTER_SPENDING_PENDING,
  REGISTER_SPENDING_SUCCESS,
  REGISTER_SPENDING_FAILED
} from '../constants/index';

const initialState = {
  loading: '',
  error: null,
  travelCountry: '',
  spendingByDates: {},
  currencyExchange: '',
  currencyCode: '',
  defaultLatLng: {}
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
        currencyCode: action.currencyCode,
        defaultLatLng: action.defaultLatLng
      };

    case GET_INITIAL_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case REGISTER_SPENDING_PENDING:
      return {
        ...state,
        loading: true
      };

    case REGISTER_SPENDING_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        spendingByDates: action.spendingByDates
      };

    case REGISTER_SPENDING_FAILED:
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
