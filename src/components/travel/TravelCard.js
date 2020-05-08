import React from 'react';

import * as SC from './travel.styles';

const TravelCard = ({
  country,
  backgroundImage,
  travelDates,
  travelId,
  userId,
  onClick
}) => (
  <SC.TravelCard.Wrapper
    backgroundImage={backgroundImage}
    onClick={() => onClick(travelId, userId)}
  >
    <h1>{country}</h1>
    <h3>{travelDates[0]} ~ {travelDates[1]}</h3>
  </SC.TravelCard.Wrapper>
);

export default TravelCard;
