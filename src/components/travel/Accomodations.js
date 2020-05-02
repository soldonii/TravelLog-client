import React from 'react';

import Scrollable from '../layout/Scrollable';
import AccomodationCard from './AccomodationCard';

import * as SC from './travel.styles';

const Accomodations = ({
  items,
  onAccomodationLinkClick
}) => (
  <SC.Accomodation.Wrapper>
    <Scrollable>
      {items.map((item, idx) => {
        const {
          description,
          title,
          infoList,
          price,
          image,
          link
        } = item;

        return (
          <AccomodationCard
            key={idx}
            item={item}
            description={description}
            title={title}
            infoList={infoList}
            price={price}
            image={image}
            link={link}
            mode='search'
            onClick={onAccomodationLinkClick}
          />
        )
      })}
    </Scrollable>
  </SC.Accomodation.Wrapper>
);

export default Accomodations;
