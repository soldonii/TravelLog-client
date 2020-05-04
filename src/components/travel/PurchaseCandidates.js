import React, { Fragment } from 'react';
import styled from 'styled-components';

import Scrollable from '../layout/Scrollable';
import FlightCard from './FlightCard';
import AccomodationCard from './AccomodationCard';
import Button from '../layout/Button';

const buttonStyle = {
  position: 'absolute',
  right: '2rem',
  top: '2rem'
};

const PurchaseCandidates = ({
  flightStack,
  accomodationStack,
  onFlightClick,
  onAccomodationClick,
  onSubmit
}) => (
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
