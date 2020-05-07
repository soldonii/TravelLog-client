import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import * as SC from './travel.styles';

const AccomodationCard = ({
  item,
  description,
  title,
  infoList,
  price,
  image,
  link,
  mode,
  onClick
}) => (
  <SC.Accomodation.Information
    mode={mode}
    onClick={(e) => mode ? onClick(description, title, price, image, link) : onClick(e, item)}
  >
    <SC.Accomodation.Image>
      <img src={image} alt='accomodation' />
    </SC.Accomodation.Image>
    <SC.Accomodation.Description>
      <SC.Accomodation.DescriptionTop mode={mode}>
        <p>{description}</p>
        <h1 className='accomodation-title'>{title}</h1>
      </SC.Accomodation.DescriptionTop>
      <SC.Accomodation.DescriptionMid>
        {infoList.map((info, idx) => (
          <p key={idx}>{info}</p>
        ))}
      </SC.Accomodation.DescriptionMid>
      <SC.Accomodation.DescriptionBottom>
        {price.length === 1 ?
        <span className='price'>₩{price[0]}원</span> :
        <Fragment>
          <span className='former-price'>₩{price[0]}{' '}</span>
          <span className='price'>₩{price[1]}원</span>
        </Fragment>
        }
      </SC.Accomodation.DescriptionBottom>
    </SC.Accomodation.Description>
  </SC.Accomodation.Information>
);

AccomodationCard.propTypes = {
  item: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  infoList: PropTypes.array.isRequired,
  price: PropTypes.array.isRequired,
  link: PropTypes.string,
  mode: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default AccomodationCard;
