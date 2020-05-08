import React, { useEffect } from 'react';

import DefaultLayout from '../layout/DefaultLayout';
import Scrollable from '../layout/Scrollable';

import TravelCard from './TravelCard';

import history from '../../lib/history';
import countryImage from '../../lib/countryImage';

const scrollableStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '3rem 5rem',
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

  const onClick = (travelId, userId) => {
    changeTravelId(travelId);
    return history.push(`/users/${userId}/dashboard/${travelId}`);
  };

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
              onClick={onClick}
            />
          );
        })}
      </Scrollable>
    </DefaultLayout>
  );
};

export default MyTravel;
