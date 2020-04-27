import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  // LOGOUT,
  // CLEAR_AUTH_ERROR,
} from '../constants/index';

const initialState = {
  token: '',
  nickname: '',
  profileImage: '',
  isAuthenticated: false,
  loading: false,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        loading: true
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        nickname: action.nickname,
        profileImage: action.profileImage,
        loading: false,
        isAuthenticated: true
      };

    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.error
      };

    default:
      return state;
  }
};

export default authReducer;



// export const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CLEAR_AUTH_ERROR:
//       return {
//         ...state,
//         loading: false,
//         error: null
//       };

//     case LOGOUT:
//       localStorage.removeItem('token');
//       return {
//         token: '',
//         nickname: '',
//         hasSignedUp: false,
//         isAuthenticated: false,
//         loading: false,
//         error: null
//       };
// };
