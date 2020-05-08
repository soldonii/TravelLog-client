import authReducer from '../auth.reducer';
import * as actions from '../../constants/index';

const initialState = {
  token: '',
  userId: '',
  nickname: '',
  profileImage: '',
  isAuthenticated: false,
  loading: false,
  error: null
};

describe('auth reducer', () => {
  it('should return initial state', () => {
    expect(authReducer(initialState, {})).toEqual(initialState);
  });

  it('should set loading state to true when SIGNUP_REQUEST action dispatches.', () => {
    const loginPendingAction = { type: actions.LOGIN_PENDING };

    expect(authReducer(initialState, loginPendingAction)).toEqual({
      token: '',
      userId: '',
      nickname: '',
      profileImage: '',
      isAuthenticated: false,
      loading: true,
      error: null
    });
  });

  it('should set token and userId to state when login request success', () => {
    const token = 'fake kakao token';
    const userId = 'fake kakao userId';
    const nickname = 'fake nickname';
    const profileImage = 'fake profileimage';
    const loginSuccessAction = { type: actions.LOGIN_SUCCESS, token, userId, nickname, profileImage };

    expect(authReducer(initialState, loginSuccessAction)).toEqual({
      token,
      userId,
      nickname,
      profileImage,
      isAuthenticated: true,
      loading: false,
      error: null
    });
  });

  it('should set all state to initial state when logout', () => {
    const logoutAction = { type: actions.LOGOUT };
    expect(authReducer(initialState, logoutAction)).toEqual({
      token: '',
      userId: '',
      nickname: '',
      profileImage: '',
      isAuthenticated: false,
      loading: false,
      error: null
    });
  });
});
