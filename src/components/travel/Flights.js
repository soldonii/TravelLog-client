import React from 'react';
import styled from 'styled-components';

import Scrollable from '../layout/Scrollable';
import Dropdown from '../layout/Dropdown';

import * as colors from '../../lib/colors';

const Flights = ({ items }) => (
  <Wrapper>
    <Scrollable>
      {items.map((item, idx) => {
        const {
          airlineImageList,
          departureTimeList,
          arrivalTimeList,
          airlinesList,
          layoverTimeList,
          layoverAirportList,
          flightHoursList,
          airportsList,
          priceAndProviderWithLinks
        } = item;

        return (
          !priceAndProviderWithLinks.length ?
            null :
            <FlightInfo key={idx}>
              <InfoContainer>
                <AirlineLogo>
                  {airlineImageList[0].map((imageUrl, idx) => (
                    <img
                      key={idx}
                      src={imageUrl}
                      alt='airlineImage'
                      className={airlineImageList[0].length === 1 ? 'single-airline' : 'multiple-airline' }
                    />
                  ))}
                </AirlineLogo>
                <FlightTime>
                  <div className='departure-arrival-time'>
                    <span>{departureTimeList[0]}</span>
                    <span>-</span>
                    <span>{arrivalTimeList[0]}</span>
                  </div>
                  <div className='airlines'>
                    {airlinesList.slice(0, Math.floor(airlinesList.length / 2))}
                  </div>
                </FlightTime>
                <Layover>
                  <div className='layover-time'>{layoverTimeList[0]}</div>
                  <div className='layover-airport'>
                    {layoverAirportList.slice(0, Math.floor(layoverAirportList.length / 2))}
                  </div>
                </Layover>
                <FlightsAndAirports>
                  <div className='flight-hour'>{flightHoursList[0]}</div>
                  <div className='airport'>{airportsList[0]}-{airportsList[1]}</div>
                </FlightsAndAirports>
              </InfoContainer>
              <InfoContainer>
                <AirlineLogo>
                  {airlineImageList[1].map((imageUrl, idx) => (
                    <img
                      key={idx}
                      src={imageUrl}
                      alt='airlineImage'
                      className={airlineImageList[1].length === 1 ? 'single-airline' : 'multiple-airline' }
                    />
                  ))}
                </AirlineLogo>
                <FlightTime>
                  <div className='departure-arrival-time'>
                    <span>{departureTimeList[1]}</span>
                    <span>-</span>
                    <span>{arrivalTimeList[1]}</span>
                  </div>
                  <div className='airlines'>{airlinesList[1]}</div>
                </FlightTime>
                <Layover>
                  <div className='layover-time'>{layoverTimeList[1]}</div>
                  <div className='layover-airport'>{layoverAirportList[1]}</div>
                </Layover>
                <FlightsAndAirports>
                  <div className='flight-hour'>{flightHoursList[1]}</div>
                  <div className='airport'>{airportsList[2]}-{airportsList[3]}</div>
                </FlightsAndAirports>
              </InfoContainer>
              <PriceContainer>
                <div className='price'>
                  <h3 className='best-price'>{priceAndProviderWithLinks[0].price}</h3>
                  <BuyButton onClick={() => window.open(priceAndProviderWithLinks[0].link, '_blank')}>
                    구매하기
                  </BuyButton>
                </div>
                <Dropdown
                  buttonName='옵션 더보기 ▼'
                  items={priceAndProviderWithLinks}
                />
              </PriceContainer>
            </FlightInfo>
        )
      })}
    </Scrollable>
  </Wrapper>
);

const Wrapper = styled.section`
  width: 50vw;
  height: 100vh;
  border-right: 0.2rem solid #101B26;
  padding: 12vh 2vw 5vh 2vw;
`;

const FlightInfo = styled.div`
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
      color: ${colors.HIGHLIGHT_COLOR};
    }

    button {
      background-color: ${colors.HIGHLIGHT_COLOR};
      color: white;
    }

    box-shadow: 0.1rem 0.1rem 0.5rem 0.2rem #101B26;
    cursor: pointer;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  height: 48%;
  width: 75%;
  padding: 0.2rem;
  justify-content: space-around;
  align-items: center;
`;

const AirlineLogo = styled.div`
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
`;

const FlightTime = styled.div`
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
`;

const Layover = styled.div`
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
`;

const FlightsAndAirports = styled.div`
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
`;

const PriceContainer = styled.div`
  position: absolute;
  height: 95%;
  width: 24%;
  right: 0.5rem;
  border-left: 1px solid #101B26;

  .price {
    position: relative;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      font-size: 2.2rem;
      margin-bottom: 1rem;
    }

    button {
      cursor: pointer;
    }
  }
`;

const BuyButton = styled.button`
  cursor: pointer;
  padding: 0.5rem 2rem;
  font-size: 1.4rem;
  background-color: black;
  color: white;
  margin-bottom: 0.5rem;
`;

export default Flights;
