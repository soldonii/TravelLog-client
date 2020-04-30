import {
  CRAWLING_START,
  // CRAWLING_SUCCESS,
  // CRAWLING_FAILED,
  // CRAWLING_ERROR,
} from '../constants/index';

const initialState = {
  loading: false,
  error: null
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

    default:
      return state;
  }
};

export default travelReducer;


