import React from 'react';
import styled from 'styled-components';

import DefaultLayout from '../layout/DefaultLayout';

import backgroundImg from '../../assets/images/backgroundImg.jpg';
import kakaoLogin from '../../assets/images/kakaoLogin.png';

const Login = ({ onLoginButtonClick }) => (
  <DefaultLayout>
    <LoginImage />
    <LoginText>
      <TextContainer>
        <h1>TRAVELLOG</h1>
        <h3>여행의 모든 것을 기록하세요.</h3>
        <p>TravelLog는 항공, 숙박 및 여행에서의 지출을 dashboard로 확인할 수 있는 web service입니다.</p>
        <img
          src={kakaoLogin}
          alt='kakao login'
          onClick={onLoginButtonClick}
        />
      </TextContainer>
    </LoginText>
  </DefaultLayout>
);

const LoginImage = styled.section`
  background-image: url(${backgroundImg});
  width: 50vw;
  height: 100vh;
  background-size: cover;
`;

const LoginText = styled.section`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0B203D;
`;

const TextContainer = styled.div`
  width: 40vw;
  height: 60vh;
  color: white;

  img {
    width: 15rem;
    cursor: pointer;
  }
`;

export default Login;
