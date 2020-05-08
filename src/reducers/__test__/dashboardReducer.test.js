import dashboardReducer from '../dashboard.reducer';

import * as actions from '../../constants/index';

const initialState = {
  loading: '',
  error: null,
  travelCountry: '',
  spendingByDates: {},
  currencyExchange: 0,
  currencyCode: '',
  defaultLatLng: { lat: 0, lng: 0 }
};

describe('dashboard reducer', () => {
  it('should get initial data.', () => {
    const travelCountry = 'seoul';
    const spendingByDates = {
      day1: 30000,
      day2: 5000,
      day3: 100101
    };
    const currencyExchange = 1109;
    const currencyCode = 'USDKRW';
    const defaultLatLng = { lat: 12, lg: 12 };

    const getInitialDataAction = {
      type: actions.GET_INITIAL_DATA_SUCCESS,
      travelCountry,
      spendingByDates,
      currencyExchange,
      currencyCode,
      defaultLatLng
    };

    expect(dashboardReducer(initialState, getInitialDataAction)).toEqual({
      loading: false,
      error: null,
      travelCountry,
      spendingByDates,
      currencyExchange,
      currencyCode,
      defaultLatLng
    });
  });

  it('should register user\'s spending.', () => {
    const spendingByDates = {
      day1: 10,
      day2: 20,
      day3: 30
    };

    const registerSpendingAction = { type: actions.REGISTER_SPENDING_SUCCESS, spendingByDates };

    expect(dashboardReducer(initialState, registerSpendingAction)).toEqual({
      loading: false,
      error: null,
      travelCountry: '',
      spendingByDates,
      currencyExchange: 0,
      currencyCode: '',
      defaultLatLng: { lat: 0, lng: 0 }
    });
  });
});
