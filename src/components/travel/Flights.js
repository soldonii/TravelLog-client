import React from 'react';

import Scrollable from '../layout/Scrollable';
import FlightCard from './FlightCard';
import * as SC from './travel.styles';

const Flights = ({
  items,
  onFlightLinkClick
}) => (
  <SC.Flights.Wrapper>
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
              onClick={onFlightLinkClick}
              mode='search'
            />
        )
      })}
    </Scrollable>
  </SC.Flights.Wrapper>
);

export default Flights;
