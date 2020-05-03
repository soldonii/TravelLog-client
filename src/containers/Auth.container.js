import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Login from '../components/auth/Login';

import { requestLogin } from '../actions/auth.action';

const Kakao = window.Kakao;

const AuthContainer = ({
  history,
  userId,
  isAuthenticated,
  loading,
  error,
  requestLogin,
}) => {
  useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    }
  }, []);

  useEffect(() => {
    isAuthenticated && history.push(`/users/${userId}/travel`);

    // eslint-disable-next-line
  }, [ isAuthenticated ]);

  useEffect(() => {
    if (error) {
      window.alert('로그인 중 에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
    }
  }, [ error ]);

  const onLoginButtonClick = () => {
    Kakao.Auth.login({
      success: () => {
        Kakao.API.request({
          url: '/v2/user/me',
          success: userInfo => requestLogin(userInfo),
          fail: err => window.alert('유저 정보를 가져오는데 실패했습니다.')
        });
      },
      fail: err => window.alert('로그인에 실패했습니다.')
    });
  };

  return <Login loading={loading} onLoginButtonClick={onLoginButtonClick} />;
};

const mapStateToProps = state => ({
  userId: state.auth.userId,
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  requestLogin: requestLogin(dispatch)
});

AuthContainer.propTypes = {
  history: PropTypes.object.isRequired,
  userId: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  requestLogin: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
