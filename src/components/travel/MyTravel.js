import React, { useEffect } from 'react';

import DefaultLayout from '../layout/DefaultLayout';
import Scrollable from '../layout/Scrollable';

import TravelCard from './TravelCard';

import history from '../../lib/history';

const scrollableStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '3rem 5rem',
  flexWrap: 'wrap',
  marginTop: '10vh'
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
    <DefaultLayout>
      <Scrollable style={scrollableStyle}>
        {allTravels.length && allTravels.map(travel => {
          const { _id: travelId, country, spendingByDates } = travel;
          const travelDates = [];

          const dateList = Object.keys(spendingByDates);
          dateList.forEach((date, idx) => {
            if (idx === 1) travelDates.push(date);
            if (idx === dateList.length - 1) travelDates.push(date);
          });

          return (<TravelCard
            key={travelId}
            data-id={travelId}
            travelId={travelId}
            country={country}
            travelDates={travelDates}
            spendingByDates={spendingByDates}
            userId={userId}
            onClick={onClick}
          />);
        })}
      </Scrollable>
    </DefaultLayout>
  );
};

export default MyTravel;
