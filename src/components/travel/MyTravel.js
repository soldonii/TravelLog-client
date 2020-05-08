import React, { useEffect } from 'react';

import DefaultLayout from '../layout/DefaultLayout';
import Scrollable from '../layout/Scrollable';

import TravelCard from './TravelCard';

import countryImage from '../../lib/countryImage';

const scrollableStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '3rem 13.9rem',
  flexWrap: 'wrap',
  marginTop: '10vh'
};

const defaultLayoutStyle = {
  alignItems: 'flex-start'
};

const MyTravel = ({
  userId,
  allTravels,
  getAllTravelData,
  changeTravelId
}) => {
  useEffect(() => {
    getAllTravelData();

    // eslint-disable-next-line
  }, []);

  return (
    <DefaultLayout style={defaultLayoutStyle}>
      <Scrollable style={scrollableStyle}>
        {allTravels.length && allTravels.map(travel => {
          const { _id: travelId, country, spendingByDates } = travel;
          const travelDates = [];

          const dateList = Object.keys(spendingByDates);
          dateList.forEach((date, idx) => {
            if (idx === 1) travelDates.push(date);
            if (idx === dateList.length - 1) travelDates.push(date);
          });

          return (
            <TravelCard
              key={travelId}
              data-id={travelId}
              travelId={travelId}
              country={country}
              backgroundImage={countryImage[country] ? countryImage[country] : countryImage.Default}
              travelDates={travelDates}
              spendingByDates={spendingByDates}
              userId={userId}
              onClick={() => changeTravelId(travelId, userId)}
            />
          );
        })}
      </Scrollable>
    </DefaultLayout>
  );
};

export default MyTravel;
