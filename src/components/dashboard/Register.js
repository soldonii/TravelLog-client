import React, { useState } from 'react';

import Button from '../layout/Button';
import Price from './Price';
import Category from './Category';
import Description from './Description';
import Map from './Map';
import GeoSearch from './GeoSearch';

import * as SC from './dashboard.styles';

const Register = ({
  spendingByDates,
  currencyExchange,
  currencyCode
}) => {
  const [ day, setDay ] = useState('출발 전');
  const [ spending, setSpending ] = useState('');
  const [ chosenCategory, setChosenCategory ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ location, setLocation ] = useState('');
  const [ coordinates, setCoordinates ] = useState({ lat: null, lng: null });

  return (
    <SC.Register.Wrapper>
      <SC.Register.Header>
        <h1>지출 등록</h1>
        <select name='day' onChange={e => setDay(e.target.value)}>
          {Object.keys(spendingByDates).map(date => (
            <option key={date} value={date}>{date}</option>
          ))}
        </select>
        <Button>등록</Button>
      </SC.Register.Header>
      <SC.Register.Price>
        <Price
          inputValue={spending}
          onInputChange={setSpending}
          currencyExchange={currencyExchange}
          currencyCode={currencyCode}
        />
      </SC.Register.Price>
      <SC.Register.Category>
        <Category
          chosen={chosenCategory}
          onClick={setChosenCategory}
        />
      </SC.Register.Category>
      <SC.Register.Description>
        <Description
          inputValue={description}
          onInputChange={setDescription}
        />
      </SC.Register.Description>
      <SC.Register.Map>
        <GeoSearch
          location={location}
          setLocation={setLocation}
          setCoordinates={setCoordinates}
        />
        <Map
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: 'calc(100% - 6rem)', width: '100%', marginTop: '1rem' }} />}
          mapElement={<div style={{ height: '100%' }} />}
          coordinates={coordinates}
        />
      </SC.Register.Map>
    </SC.Register.Wrapper>
  );
};

export default Register;
