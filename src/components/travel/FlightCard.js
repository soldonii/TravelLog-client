import React from 'react';

import Dropdown from '../layout/Dropdown';
import * as SC from './travel.styles';

const FlightCard = ({
  currentItem,
  airlineImageList,
  departureTimeList,
  arrivalTimeList,
  airlinesList,
  layoverTimeList,
  layoverAirportList,
  flightHoursList,
  airportsList,
  priceAndProviderWithLinks,
  onClick,
  mode
}) => (
  <SC.FlightCard.Wrapper mode={mode}>
    <SC.FlightCard.Information>
      <SC.FlightCard.AirlineLogo>
        {airlineImageList[0].map((imageUrl, idx) => (
          <img
            key={idx}
            src={imageUrl}
            alt='airlineImage'
            className={airlineImageList[0].length === 1 ? 'single-airline' : 'multiple-airline' }
          />
        ))}
      </SC.FlightCard.AirlineLogo>
      <SC.FlightCard.FlightTime>
        <div className='departure-arrival-time'>
          <span>{departureTimeList[0]}</span>
          <span>-</span>
          <span>{arrivalTimeList[0]}</span>
        </div>
        <div className='airlines'>
          {airlinesList.slice(0, Math.floor(airlinesList.length / 2))}
        </div>
      </SC.FlightCard.FlightTime>
      <SC.FlightCard.Layover>
        <div className='layover-time'>{layoverTimeList[0]}</div>
        <div className='layover-airport'>
          {layoverAirportList.slice(0, Math.floor(layoverAirportList.length / 2))}
        </div>
      </SC.FlightCard.Layover>
      <SC.FlightCard.FlightsAndAirport>
        <div className='flight-hour'>{flightHoursList[0]}</div>
        <div className='airport'>{airportsList[0]}-{airportsList[1]}</div>
      </SC.FlightCard.FlightsAndAirport>
    </SC.FlightCard.Information>
    <SC.FlightCard.Information>
      <SC.FlightCard.AirlineLogo>
        {airlineImageList[1].map((imageUrl, idx) => (
          <img
            key={idx}
            src={imageUrl}
            alt='airlineImage'
            className={airlineImageList[1].length === 1 ? 'single-airline' : 'multiple-airline' }
          />
        ))}
      </SC.FlightCard.AirlineLogo>
      <SC.FlightCard.FlightTime>
        <div className='departure-arrival-time'>
          <span>{departureTimeList[1]}</span>
          <span>-</span>
          <span>{arrivalTimeList[1]}</span>
        </div>
        <div className='airlines'>{airlinesList[1]}</div>
      </SC.FlightCard.FlightTime>
      <SC.FlightCard.Layover>
        <div className='layover-time'>{layoverTimeList[1]}</div>
        <div className='layover-airport'>{layoverAirportList[1]}</div>
      </SC.FlightCard.Layover>
      <SC.FlightCard.FlightsAndAirport>
        <div className='flight-hour'>{flightHoursList[1]}</div>
        <div className='airport'>{airportsList[2]}-{airportsList[3]}</div>
      </SC.FlightCard.FlightsAndAirport>
    </SC.FlightCard.Information>
    <SC.FlightCard.PriceContainer>
      <SC.FlightCard.PriceWrapper mode={mode}>
        <div className='price'>
          <h3 className='best-price'>{priceAndProviderWithLinks[0].price}</h3>
          {mode === 'search' ?
            <SC.FlightCard.BuyButton onClick={() => onClick(currentItem, priceAndProviderWithLinks[0])}>
              살펴보기
            </SC.FlightCard.BuyButton> :
            <SC.FlightCard.BuyButton onClick={(e) => onClick(e, currentItem)}>
              구매확정
            </SC.FlightCard.BuyButton>}
        </div>
        {mode === 'search' &&
          <Dropdown
            buttonName='옵션 더보기 ▼'
            currentItem={currentItem}
            dropDownOptions={priceAndProviderWithLinks}
            onItemClick={onClick}
          />}
      </SC.FlightCard.PriceWrapper>
    </SC.FlightCard.PriceContainer>
  </SC.FlightCard.Wrapper>
);

export default FlightCard;
