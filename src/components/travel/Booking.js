import React from 'react';

import DefaultLayout from '../layout/DefaultLayout';
import Flights from './Flights';
import Accomodations from './Accomodations';

const Booking = ({
  flights,
  accommodations,
  onFlightLinkClick,
  onAccomodationLinkClick
}) => {
  return (
    <DefaultLayout>
      <Flights items={flights} onFlightLinkClick={onFlightLinkClick} />
      <Accomodations items={accommodations} onAccomodationLinkClick={onAccomodationLinkClick} />
    </DefaultLayout>
  );
};

export default Booking;
