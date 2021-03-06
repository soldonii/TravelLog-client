import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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
  setShouldModalOpen,
  travelId,
  travelCountry,
  spendingByDates,
  currencyExchange,
  currencyCode,
  registerSpending,
  chosenSpending,
  setChosenSpending,
  defaultLatLng,
  deleteSpending
}) => {
  const [ day, setDay ] = useState('출발 전');
  const [ spending, setSpending ] = useState('');
  const [ chosenCategory, setChosenCategory ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ location, setLocation ] = useState('');
  const [ coordinates, setCoordinates ] = useState(defaultLatLng);
  const [ spendingId, setSpendingId ] = useState('');

  useEffect(() => {
    if (chosenSpending.category) {
      let { day, amount, category, description, location: { title, coordinates }, spendingId } = chosenSpending;

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
      setDay('출발 전');
      setSpending('');
      setChosenCategory('');
      setDescription('');
      setLocation('');
      setCoordinates(defaultLatLng);
      setSpendingId('');
      setChosenSpending({});
    }

    // eslint-disable-next-line
  }, [ shouldModalOpen ]);

  const onRegisterButtonClick = e => {
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

    return setShouldModalOpen(false);
  };

  const onDeleteButtonClick = e => {
    e.preventDefault();

    deleteSpending(travelId, chosenSpending.spendingId);
    setShouldModalOpen(false);
  };

  return (
    <SC.Register.Wrapper>
      <SC.Register.Header>
        <h1>지출 등록</h1>
        <select name='day' onChange={e => setDay(e.target.value)}>
          {Object.keys(spendingByDates).map(date => {
            return <option selected={date === day} key={date} value={date}>{date}</option>
          })}
        </select>
        {chosenSpending.category ?
          <div>
            <Button onClick={onDeleteButtonClick}>삭제</Button>
            <Button onClick={onRegisterButtonClick}>등록</Button>
          </div> :
          <Button onClick={onRegisterButtonClick}>등록</Button>}
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
          coordinates={[coordinates]}
          travelCountry={travelCountry}
        />
      </SC.Register.Map>
    </SC.Register.Wrapper>
  );
};

Register.propTypes = {
  shouldModalOpen: PropTypes.bool.isRequired,
  setShouldModalOpen: PropTypes.func.isRequired,
  travelId: PropTypes.string.isRequired,
  travelCountry: PropTypes.string,
  spendingByDates: PropTypes.object.isRequired,
  currencyExchange: PropTypes.number.isRequired,
  currencyCode: PropTypes.string.isRequired,
  registerSpending: PropTypes.func.isRequired,
  chosenSpending: PropTypes.object,
  setChosenSpending: PropTypes.func.isRequired,
  defaultLatLng: PropTypes.object.isRequired,
  deleteSpending: PropTypes.func.isRequired,
};

export default Register;
