import styled from 'styled-components';

export const Dashboard = {
  Wrapper: styled.section`
    height: 100vh;
    width: 33.3vw;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
};

export const Category = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Title: styled.h1`
    font-size: 3rem;
    margin-bottom: 3rem;
  `
};
