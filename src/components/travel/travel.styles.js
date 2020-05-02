import styled from 'styled-components';

import coverImg from '../../assets/images/coverImg.png';
import * as colors from '../../lib/colors';

export const Accomodation = {
  Wrapper: styled.section`
    width: 50vw;
    height: 100vh;
    padding: 12vh 2vw 5vh 2vw;
  `,
  Information: styled.div`
    width: 100%;
    height: 12.65rem;
    border-radius: 0.5rem;
    box-shadow: 0.1rem 0.1rem 0.5rem 0.2rem lightgray;
    background-color: white;
    transition: box-shadow 0.3s;
    margin: 1rem auto;
    padding: 0.2rem 0.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;

    &:hover {
      box-shadow: 0.1rem 0.1rem 0.5rem 0.2rem #101B26;
      cursor: pointer;

      .price {
        color: ${props => props.mode === 'search' ? colors.HIGHLIGHT_COLOR : colors.CONFIRM_COLOR};
      }
    }
  `,
  Image: styled.div`
    height: 100%;
    width: 30%;

    img {
      width: 100%;
      height: 100%;
    }
  `,
  Description: styled.div`
    height: 100%;
    width: 70%;
    padding: 0.5rem 1rem;
  `,
  DescriptionTop: styled.div`
    height: 4rem;
    width: 100%;
    margin-bottom: 0.5rem;

    p {
      font-size: 1.3rem;
      color: gray;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    .accomodation-title {
      font-size: ${props => props.mode === 'search' ? '1.7rem' : '1.4rem'};
      color: black;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  `,
  DescriptionMid: styled.div`
    height: 3.5rem;
    width: 100%;
    margin-bottom: 0.5rem;

    p {
      font-size: 1.3rem;
      color: gray;
    }
  `,
  DescriptionBottom: styled.div`
    height: calc(100% - 8.5rem);
    width: 100%;
    text-align: right;

    h1 {
      font-size: 1.7rem;
    }

    .former-price {
      font-size: 1.4rem;
      color: gray;
      text-decoration: line-through;
    }

    .price {
      font-size: 2rem;
      color: black;
    }
  `
};

export const FlightCard = {
  Wrapper: styled.div`
    width: 100%;
    height: 12.65rem;
    border-radius: 0.5rem;
    box-shadow: 0.1rem 0.1rem 0.5rem 0.2rem lightgray;
    background-color: white;
    transition: all 0.3s;
    margin: 1rem auto;
    padding: 0.2rem 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;

    &:hover {
      .price > h3 {
        color: ${props => props.mode === 'search' ? colors.HIGHLIGHT_COLOR : colors.CONFIRM_COLOR};
      }

      button {
        background-color: ${props => props.mode === 'search' ? colors.HIGHLIGHT_COLOR : colors.CONFIRM_COLOR};
        color: white;
      }

      box-shadow: 0.1rem 0.1rem 0.5rem 0.2rem #101B26;
      cursor: pointer;
    }
  `,
  Information: styled.div`
    display: flex;
    height: 48%;
    width: 75%;
    padding: 0.2rem;
    justify-content: space-around;
    align-items: center;
  `,
  AirlineLogo: styled.div`
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .single-airline {
      height: 90%;
      width: 90%;
      margin: 0 auto;
    }

    .multiple-airline {
      height: 45%;
      width: 45%;
      margin: 0 auto;
    }
  `,
  FlightTime: styled.div`
    width: 13rem;
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    padding-left: 1rem;

    .departure-arrival-time {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .airlines {
      font-size: 1.2rem;
    }
  `,
  Layover : styled.div`
    width: 8rem;
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    .layover-time {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .layover-airport {
      font-size: 1.2rem;
    }
  `,
  FlightsAndAirport : styled.div`
    width: 10rem;
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    .flight-hour {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .airport {
      font-size: 1.2rem;
    }
  `,
  PriceContainer: styled.div`
    position: absolute;
    height: 95%;
    width: 24%;
    right: 0.5rem;
    border-left: 1px solid #101B26;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  PriceWrapper: styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: ${props => !props.mode && 'flex'};
    flex-direction: ${props => !props.mode && 'column'};
    justify-content: ${props => !props.mode && 'center'};
    align-items: ${props => !props.mode && 'center'};

    .price {
      height: 70%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: ${props => props.mode && '1rem'};

      h3 {
        font-size: ${props => props.mode ? '2.2rem' : '1.7rem'};
        margin-bottom: 1rem;
      }

      button {
        cursor: pointer;
      }
    }
  `,
  BuyButton: styled.button`
    cursor: pointer;
    padding: 0.5rem 2rem;
    font-size: 1.4rem;
    background-color: black;
    color: white;
    margin-bottom: 0.5rem;
  `
};

export const Flights = {
  Wrapper: styled.section`
    width: 50vw;
    height: 100vh;
    border-right: 0.2rem solid #101B26;
    padding: 12vh 2vw 5vh 2vw;
  `
};

export const Travel = {
  Wrapper :styled.section`
    background-image: url(${coverImg});
    background-size: cover;
    width: 100vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding: 10vh 10vw;
    color: white;

    h1 {
      font-size: 6rem;
      font-weight: 700;
      margin-bottom: 2rem;
    }

    h3 {
      font-size: 4rem;
      margin-bottom: 2rem;
    }
  `,
  Form : styled.form`
    height: 100%;
    width: 100%;
    background-color: rgba(2, 18, 44, 0.7);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 2rem;
    position: relative;

    .button-container {
      position: absolute;
      right: 2rem;
      bottom: 2rem;
    }
  `
};
