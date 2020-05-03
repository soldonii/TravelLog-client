import React, { Fragment } from 'react';
import styled from 'styled-components';

import Scrollable from './Scrollable';
import FlightCard from '../travel/FlightCard';
import AccomodationCard from '../travel/AccomodationCard';
import Button from './Button';

const SlideInModal = ({
  shouldModalOpen,
  setShouldModalOpen,
  displayItem1,
  displayItem2,
  onItem1Click,
  onItem2Click,
  onModalButtonClick
}) => {
  return (
    <Fragment>
      <ModalOverlay open={shouldModalOpen} onClick={() => setShouldModalOpen(false)} />
      <ModalWrapper open={shouldModalOpen}>
        <Button
          style={{ position: 'absolute', right: '2rem', top: '2rem' }}
          onClick={onModalButtonClick}
        >
          확정
        </Button>
        <ModalContent>
          <h1>관심 항공권</h1>
          <Scrollable>
            {displayItem1.map((item, idx) => {
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
                  onClick={onItem1Click}
                />
              )
            })}
          </Scrollable>
        </ModalContent>
        <ModalContent>
          <h1>관심 숙소</h1>
          <Scrollable>
            {displayItem2.map((item, idx) => {
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
                  onClick={onItem2Click}
                />
              )
            })}
          </Scrollable>
        </ModalContent>
      </ModalWrapper>
    </Fragment>
  );
};

const ModalOverlay = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => props.open ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

const ModalWrapper = styled.div`
  height: 100vh;
  width: 75vw;
  position: fixed;
  top: 0;
  display: ${props => props.open ? 'block' : 'none'};
  right: ${props => props.open ? 0 : '-100%'};
  z-index: 1;
  transition: all 0.5s ease-in-out;
  display: flex;
  background: white;
`;

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

export default SlideInModal;
