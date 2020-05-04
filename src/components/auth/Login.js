import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import DefaultLayout from '../layout/DefaultLayout';
import Loading from '../layout/Loading';
import * as SC from './auth.styles';

import backgroundImg from '../../assets/images/backgroundImg.jpg';
import kakaoLoginButton from '../../assets/images/kakaoLogin.png';
import airplaneLoading from '../../assets/images/airplaneLoading.gif';

const Login = ({
  loading,
  onLoginButtonClick
}) => (
  <DefaultLayout>
    {loading ?
      <Loading message='로그인 중입니다' loadingImg={airplaneLoading} /> :
      <Fragment>
        <SC.Login.CoverImage imageUrl={backgroundImg} />
        <SC.Login.CoverDescription>
          <SC.Login.TextContainer>
            <h1>TRAVELLOG</h1>
            <h3>여행의 모든 것을 기록하세요.</h3>
            <img
              src={kakaoLoginButton}
              alt='kakao login'
              onClick={onLoginButtonClick}
            />
          </SC.Login.TextContainer>
        </SC.Login.CoverDescription>
      </Fragment>}
  </DefaultLayout>
);

Login.propTypes = {
  loading: PropTypes.bool.isRequired,
  onLoginButtonClick: PropTypes.func.isRequired
};

export default Login;
