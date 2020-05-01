import React from 'react';

import DefaultLayout from '../layout/DefaultLayout';
import Flights from './Flights';
import Accomodations from './Accomodations';

const Booking = ({
  flights,
  accommodations
}) => {
  return (
    <DefaultLayout>
      <Flights items={flights} />
      <Accomodations items={accommodations} />
    </DefaultLayout>
  );
};

export default Booking;
