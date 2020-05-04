import React, { Fragment } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Scrollable from '../layout/Scrollable';
import FlightCard from './FlightCard';
import AccomodationCard from './AccomodationCard';
import Button from '../layout/Button';

import { setTokenToHeader } from '../../lib/index';

const buttonStyle = {
  position: 'absolute',
  right: '2rem',
  top: '2rem'
};

const PurchaseCandidates = ({
  history,
  flightStack,
  accomodationStack,
  boughtFlight,
  boughtAccomodation,
  selectFlightTicket,
  deselectFlightTicket,
  selectAccomodation,
  deselectAccomodation,
  travelCountry,
  travelDayList,
  saveTravelId,
  userId
}) => {
  const onFlightClick = (e, flight) => {
    if (!Object.keys(boughtFlight).length) {
      e.target.style.backgroundColor = '#45c43c';
      selectFlightTicket(flight);
    } else if (JSON.stringify(boughtFlight) === JSON.stringify(flight)) {
      e.target.style.backgroundColor = 'black';
      deselectFlightTicket();
    } else {
      window.alert('한 개의 티켓만 구매티켓으로 등록할 수 있습니다.');
    }
  };

  const onAccomodationClick = (e, accomodation) => {
    const priceSelector = e.currentTarget.children[1].children[2].children[0];

    if (!Object.keys(boughtAccomodation).length) {
      priceSelector.style.color = '#45c43c';
      selectAccomodation(accomodation);
    } else if (JSON.stringify(boughtAccomodation) === JSON.stringify(accomodation)) {
      priceSelector.style.color = 'black';
      deselectAccomodation();
    } else {
      window.alert('한 개의 숙소만 구매숙소로 등록할 수 있습니다.');
    }
  };

  const onSubmit = async () => {
    if (!Object.keys(boughtFlight).length || !Object.keys(boughtAccomodation).length ) {
      window.alert('항공편, 숙소 각각 한 개씩 구매를 확정해야 합니다.');
    } else {
      const token = localStorage.getItem('token');
      setTokenToHeader(token);

      const { priceAndProviderWithLinks } = boughtFlight;
      const { price: flightPrice } = priceAndProviderWithLinks[0];
      const { price: accomodationPrice } = boughtAccomodation;

      const response = await axios.post(`${process.env.REACT_APP_SERVER_URI}/dashboard`, {
        flightPrice: parseInt(flightPrice.slice(0, -1).replace(/,/gi, '')),
        accomodationPrice: parseInt(accomodationPrice.replace(/,/gi, '') * travelDayList.length),
        travelCountry,
        travelDayList
      });

      const { travelId } = response.data;

      saveTravelId(travelId);

      if (response.status === 200) history.push(`/users/${userId}/dashboard`);
    }
  };

  return(
    <Fragment>
      <Button style={buttonStyle} onClick={onSubmit}>구매 확정</Button>
      <ModalContent>
        <h1>관심 항공권</h1>
        <Scrollable>
          {flightStack.map((item, idx) => {
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
              <FlightCard
                key={idx}
                currentItem={item}
                airlineImageList={airlineImageList}
                departureTimeList={departureTimeList}
                arrivalTimeList={arrivalTimeList}
                airlinesList={airlinesList}
                layoverTimeList={layoverTimeList}
                layoverAirportList={layoverAirportList}
                flightHoursList={flightHoursList}
                airportsList={airportsList}
                priceAndProviderWithLinks={priceAndProviderWithLinks}
                onClick={onFlightClick}
              />
            )
          })}
        </Scrollable>
      </ModalContent>
      <ModalContent>
        <h1>관심 숙소</h1>
        <Scrollable>
          {accomodationStack.map((item, idx) => {
            const {
              description,
              title,
              price,
              image
            } = item;

            return (
              <AccomodationCard
                key={idx}
                item={item}
                description={description}
                title={title}
                infoList={[]}
                price={[price]}
                image={image}
                onClick={onAccomodationClick}
              />
            )
          })}
        </Scrollable>
      </ModalContent>
    </Fragment>
  );
};

const ModalContent = styled.div`
  height: 100%;
  width: 50%;
  padding: 7rem 2rem 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
`;

export default PurchaseCandidates;
