import styled from 'styled-components';

import downarrow from '../../assets/images/downarrow.png';
import * as colors from '../../lib/colors';

export const Dashboard = {
  Wrapper: styled.section`
    height: 90vh;
    width: 33.3vw;
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
};

export const PieChart = {
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

export const Summary = {
  ByDates: styled.div`
    margin: 1rem;
    padding: 1rem;
    border: 1px solid black;
    box-shadow: 2px 2px gray;
    min-height: 5rem;
    width: calc(100% - 2rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h1 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1rem;
      color: ${colors.HIGHLIGHT_COLOR};
    }
  `,
  List: styled.div`
    width: 100%;
    min-height: 5rem;
    padding: 0.5rem;
    margin: 0.3rem 0;
    display: flex;
    cursor: pointer;
    transition: opacity 0.5s ease-in-out;

    &:hover {
      background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
      opacity: 1;
    }
  `,
  Icon: styled.div`
    height: 4rem;
    width: 4rem;
    margin-right: 1rem;

    img {
      height: 100%;
      width: 100%;
    }
  `,
  Description: styled.div`
    width: calc(100% - 4rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      width: 100%;
      height: 80%;
      display: flex;
      justify-content: space-between;
      font-size: 2rem;
    }

    .location-title {
      width: 100%;
      font-size: 1rem;
      color: gray;
      text-align: right;
    }

    .description, .amount, .location-title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `
};

export const Register = {
  Wrapper: styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 5vh 3vw;

    select {
      width: 15rem;
      padding: 0.5rem 1rem;
      background: url(${downarrow}) no-repeat 95% 50%;
      background-size: 1.5rem;
      border: 1px solid black;
      appearance: none;
      cursor: pointer;
      font-size: 1.5rem;
    }
  `,
  Header: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 5vh;

    h1 {
      font-size: 4rem;
      font-weight: bolder;
    }
  `,
  Price: styled.div`
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: flex-end;

    input {
      height: 100%;
      width: 30%;
      font-size: 4rem;
      background: transparent;
      border: transparent;
      text-align: center;
      border-bottom: 1px solid lightgray;
    }

    input::-webkit-inner-spin-button {
      opacity: 0;
    }

    h2 {
      font-size: 3rem;
      margin-right: 2rem;
    }

    h5 {
      font-size: 2rem;
    }

    .converted-numbers {
      color: ${colors.HIGHLIGHT_COLOR};
      font-size: 3rem;
    }

    .currency-unit {
      font-size: 1.5rem;
    }
  `,
  Category: styled.div`
    height: 13vh;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .icon {
      text-align: center;
      cursor: pointer;
    }

    .active-icon {
      filter: grayscale(0);
    }

    .active-name {
      color: ${colors.HIGHLIGHT_COLOR};
      font-weight: bolder;
    }

    img {
      width: 4rem;
      height: 4rem;
      filter: grayscale(1);
    }

    p {
      margin-top: 0.5rem;
      font-size: 1.4rem;
    }
  `,
  Description: styled.div`
    height: 7vh;
    width: 100%;

    input {
      height: 100%;
      width: 100%;
      font-size: 2rem;
      background: transparent;
      border: transparent;
      border-bottom: 1px solid lightgray;
    }
  `,
  Map: styled.div`
    border: 1px solid green;
    height: 40vh;
    width: 100%;
  `
};

export const GeoSearch = {
  Wrapper: styled.div`
    width: 90%;
    text-align: center;
    margin: 0 auto;
    position: relative;

    input {
      width: 100%;
      font-size: 1.5rem;
      height: 3rem;
      background: transparent;
      border: 0;
      border-bottom: 1px solid gray;
      margin-top: 1rem;
    }

    .suggestion {
      position: absolute;
      z-index: 2;
      font-size: 1.4rem;
      cursor: pointer;
      background-color: white;
    }
  `,
  Suggestion: styled.div`
    position: absolute;
    width: 100%;
    z-index: 2;
    font-size: 1.4rem;
    cursor: pointer;
    background-color: white;
  `
}
