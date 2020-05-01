import React from 'react';
import styled from 'styled-components';

import Dropdown from '../layout/Dropdown';

const Flights = ({ items }) => {
  return (
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
              <FlightInfo key={idx} onClick={() => `window.open(${priceAndProviderWithLinks[0].link})`}>
                <div className='flight-container'>
                  <div className='airline-images'>
                    {airlineImageList[0].map((imageUrl, idx) => (
                      <img
                        key={idx}
                        src={imageUrl}
                        alt='airlineImage'
                        className={airlineImageList[0].length === 1 ? 'single-airline' : 'multiple-airline' }
                      />
                    ))}
                  </div>
                  <div className='time-and-airlines'>
                    <div className='departure-arrival-time'>
                      <span>{departureTimeList[0]}</span>
                      <span>-</span>
                      <span>{arrivalTimeList[0]}</span>
                    </div>
                    <div className='airlines'>
                      {airlinesList.slice(0, Math.floor(airlinesList.length / 2))}
                    </div>
                  </div>
                  <div className='layover'>
                    <div className='layover-time'>{layoverTimeList[0]}</div>
                    <div className='layover-airport'>
                      {layoverAirportList.slice(0, Math.floor(layoverAirportList.length / 2))}
                    </div>
                  </div>
                  <div className='flight-hour-and-airport'>
                    <div className='flight-hour'>{flightHoursList[0]}</div>
                    <div className='airport'>{airportsList[0]}-{airportsList[1]}</div>
                  </div>
                </div>
                <div className='flight-container'>
                  <div className='airline-images'>
                    {airlineImageList[1].map((imageUrl, idx) => (
                      <img
                        key={idx}
                        src={imageUrl}
                        alt='airlineImage'
                        className={airlineImageList[1].length === 1 ? 'single-airline' : 'multiple-airline' }
                      />
                    ))}
                  </div>
                  <div className='time-and-airlines'>
                    <div className='departure-arrival-time'>
                      <span>{departureTimeList[1]}</span>
                      <span>-</span>
                      <span>{arrivalTimeList[1]}</span>
                    </div>
                    <div className='airlines'>{airlinesList[1]}</div>
                  </div>
                  <div className='layover'>
                    <div className='layover-time'>{layoverTimeList[1]}</div>
                    <div className='layover-airport'>{layoverAirportList[1]}</div>
                  </div>
                  <div className='flight-hour-and-airport'>
                    <div className='flight-hour'>{flightHoursList[1]}</div>
                    <div className='airport'>{airportsList[2]}-{airportsList[3]}</div>
                  </div>
                </div>
                <div className='price-container'>
                  <div className='price'>
                    <h3 className='best-price'>{priceAndProviderWithLinks[0].price}</h3>
                    <button onClick={`window.open(${priceAndProviderWithLinks[0].link})`}>구매하기</button>
                  </div>
                  <Dropdown
                    buttonName='가격 옵션 더보기'
                    items={priceAndProviderWithLinks}
                  />
                </div>
              </FlightInfo>
          )
        })}
      </Scrollable>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 50vw;
  height: 100vh;
  border-right: 0.2rem solid #101B26;
  padding: 12vh 2vw 5vh 2vw;
`;

const Scrollable = styled.div`
  width: 100%;
  height: 100%;
  background-color: lightpink;
  overflow-y: scroll;
  padding: 0 0.5rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const FlightInfo = styled.div`
  width: 100%;
  height: 12.65rem;
  border-radius: 0.5rem;
  box-shadow: 0.1rem 0.1rem 0.5rem 0.2rem lightgray;
  background-color: white;
  transition: box-shadow 0.3s;
  margin: 1rem auto;
  padding: 0.2rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;

  &:hover {
    box-shadow: 0.1rem 0.1rem 0.5rem 0.2rem #101B26;
    cursor: pointer;
  }

  .flight-container {
    display: flex;
    height: 48%;
    width: 80%;
    padding: 0.2rem;
    background-color: lightseagreen;
    justify-content: space-around;
    align-items: center;

    .airline-images {
      width: 5rem;
      height: 5rem;
      background-color: lightgoldenrodyellow;
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
    }

    .time-and-airlines {
      width: 15rem;
      height: 5rem;
      background-color: lightgray;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;

      .departure-arrival-time {
        font-size: 1.5rem;
        font-weight: bold;
      }

      .airlines {
        font-size: 1.2rem;
      }
    }

    .layover {
      width: 8rem;
      height: 5rem;
      background-color: lightblue;
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
    }

    .flight-hour-and-airport {
      width: 10rem;
      height: 5rem;
      background-color: lightpink;
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
    }
  }

  .price-container {
    position: absolute;
    background-color: lightsteelblue;
    height: 95%;
    width: 19%;
    right: 0.5rem;

    .price {
      position: relative;
      height: 70%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h3 {
        font-size: 1.7rem;
        margin-bottom: 1rem;
      }

      button {
        cursor: pointer;
      }
    }
  }
`;

export default Flights;
