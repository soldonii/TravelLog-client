import React, { useState, useEffect } from 'react';
import rs from 'randomstring';

import Button from '../layout/Button';
import Price from './Price';
import Category from './Category';
import Description from './Description';
import Map from './Map';
import GeoSearch from './GeoSearch';

import * as SC from './dashboard.styles';

const Register = ({
  shouldModalOpen,
  travelId,
  spendingByDates,
  currencyExchange,
  currencyCode,
  registerSpending,
  chosenSpending
}) => {
  const [ day, setDay ] = useState('출발 전');
  const [ spending, setSpending ] = useState('');
  const [ chosenCategory, setChosenCategory ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ location, setLocation ] = useState('');
  const [ coordinates, setCoordinates ] = useState({ lat: null, lng: null });
  const [ spendingId, setSpendingId ] = useState('');

  useEffect(() => {
    if (chosenSpending.category) {
      const { day, amount, category, description, location: { title, coordinates }, spendingId } = chosenSpending;

      setDay(day);
      setSpending(Math.floor(amount / currencyExchange));
      setChosenCategory(category);
      setDescription(description);
      setLocation(title);
      setCoordinates(coordinates);
      setSpendingId(spendingId)
    }

    // eslint-disable-next-line
  }, [ chosenSpending ]);

  useEffect(() => {
    if (!shouldModalOpen) {
      const resetTimeout = window.setTimeout(() => {
        setDay('출발 전');
        setSpending('');
        setChosenCategory('');
        setDescription('');
        setLocation('');
        setCoordinates('');

        window.clearTimeout(resetTimeout);
      }, 500);
    }
  }, [ shouldModalOpen ]);

  const onSubmit = e => {
    e.preventDefault();

    if (!spending) return window.alert('금액을 입력해주세요.');
    if (!chosenCategory) return window.alert('카테고리를 선택해주세요.');
    if (!description) return window.alert('소비 내용을 입력해주세요.');
    if (!location) return window.alert('장소를 입력해주세요.');

    const id = spendingId || rs.generate(6);

    registerSpending({
      travelId,
      day,
      spending: spending * currencyExchange,
      chosenCategory,
      description,
      location,
      coordinates,
      spendingId: id
    });
  };

  return (
    <SC.Register.Wrapper onSubmit={onSubmit}>
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
