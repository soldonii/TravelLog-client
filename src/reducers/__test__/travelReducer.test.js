import travelReducer from '../travel.reducer';

import * as actions from '../../constants/index';

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
  travelId: '',
  allTravels: []
};

describe('travel reducer', () => {
  it('should request crawling data properly.', () => {
    const requestCrawlingAction = { type: actions.CRAWLING_START };

    expect(travelReducer(initialState, requestCrawlingAction)).toEqual({
      loading: true,
      error: null,
      kayakData: [],
      airbnbData: [],
      flightStack: [],
      accomodationStack: [],
      boughtFlight: {},
      boughtAccomodation: {},
      travelCountry: '',
      travelDayList: [],
      travelId: '',
      allTravels: []
    });
  });

  it('should change state with crawling data when succeeded.', () => {
    const kayak = 'fetched kayak data.';
    const airbnb = 'fetched airbnb data';
    const country = 'travel counrty';
    const travelDayList = ['출발 전', 'day1', 'day2'];
    const crawlingSuccessAction = {
      type: actions.CRAWLING_SUCCESS,
      kayak,
      airbnb,
      country,
      travelDayList
    };

    expect(travelReducer(initialState, crawlingSuccessAction)).toEqual({
      loading: false,
      error: null,
      kayakData: kayak,
      airbnbData: airbnb,
      flightStack: [],
      accomodationStack: [],
      boughtFlight: {},
      boughtAccomodation: {},
      travelCountry: country,
      travelDayList,
      travelId: '',
      allTravels: []
    });
  });

  it('should select flight when it is not selected.', () => {
    const selected = {
      name: 'selected flight',
      price: 10000
    };
    const selectFlightAction = { type: actions.SELECT_FLIGHT_TICKET, flight: selected };

    expect(travelReducer(initialState, selectFlightAction)).toEqual({
      loading: false,
      error: null,
      kayakData: [],
      airbnbData: [],
      flightStack: [],
      accomodationStack: [],
      boughtFlight: selected,
      boughtAccomodation: {},
      travelCountry: '',
      travelDayList: [],
      travelId: '',
      allTravels: []
    });
  });

  it('should deselect flight when it is selected.', () => {
    const deselectFlightAction = { type: actions.DESELECT_FLIGHT_TICKET };

    expect(travelReducer(initialState, deselectFlightAction)).toEqual({
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
      travelId: '',
      allTravels: []
    });
  });

  it('should fetch all travel data.', () => {
    const allTravels = [
      {
        country: 'United States',
        id: 1
      },
      {
        country: 'Austrailia',
        id: 2
      },
      {
        country: 'Spain',
        id: 3
      }
    ];
    const getAllTravelDataAction = { type: actions.GET_TRAVELDATA_SUCCESS, allTravels };

    expect(travelReducer(initialState, getAllTravelDataAction)).toEqual({
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
      travelId: '',
      allTravels
    });
  });

  it('should change current travel id.', () => {
    const travelId = '123123';
    const changeTravelIdAction = { type: actions.CHANGE_TRAVELID, travelId };

    expect(travelReducer(initialState, changeTravelIdAction)).toEqual({
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
      travelId,
      allTravels: []
    });
  });
});
