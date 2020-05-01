import {
  CRAWLING_START,
  CRAWLING_SUCCESS,
  // CRAWLING_FAILED,
  // CRAWLING_ERROR,
} from '../constants/index';

const initialState = {
  loading: false,
  error: null,
  kayakData: [],
  airbnbData: []
  // token: '',
  // userId: '',
  // nickname: '',
  // profileImage: '',
  // isAuthenticated: false,
  // loading: false,
  // error: null
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
        airbnbData: action.airbnb
      };

    default:
      return state;
  }
};

export default travelReducer;


