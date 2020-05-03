import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import DefaultLayout from '../layout/DefaultLayout';

const Loading = ({
  message,
  loadingImg
}) => {
  const [ timer, setTimer ] = useState(1);

  useEffect(() => {
    const interval = window.setInterval(() => setTimer(timer => {
      timer === 3 ? timer = 1 : timer++;
      return timer;
    }), 500);

    return () => window.clearInterval(interval);
  }, [ timer ]);

  return (
    <DefaultLayout>
      <Wrapper>
        <img src={loadingImg} alt='loading' />
        <h1>{message}{'.'.repeat(timer)}</h1>
      </Wrapper>
    </DefaultLayout>
  );
};

const Wrapper = styled.div`
  background-color: #101B26;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    height: 30rem;
    width: 30rem;
  }

  h1 {
    margin-top: 4rem;
    font-size: 2rem;
    color: white;
  }
`;

export default Loading;
