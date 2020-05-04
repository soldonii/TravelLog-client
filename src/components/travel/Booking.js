import React from 'react';

import DefaultLayout from '../layout/DefaultLayout';
import Flights from './Flights';
import Accomodations from './Accomodations';

const Booking = ({
  flights,
  accommodations,
  addFlightToStack,
  addAccomodationToStack,
}) => {
  const onFlightLinkClick = (flightInfo, selectedOption) => {
    addFlightToStack(flightInfo, selectedOption);
    window.open(selectedOption.link, '_blank');
  };

  const onAccomodationLinkClick = (description, title, price, image, link) => {
    addAccomodationToStack(description, title, price, image);
    window.open(link, '_blank');
  };

  return (
    <DefaultLayout>
      <Flights items={flights} onFlightLinkClick={onFlightLinkClick} />
      <Accomodations items={accommodations} onAccomodationLinkClick={onAccomodationLinkClick} />
    </DefaultLayout>
  );
};

export default Booking;
