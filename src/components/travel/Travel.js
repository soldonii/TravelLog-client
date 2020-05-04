import React, { useState, useEffect } from 'react';

import DefaultLayout from '../layout/DefaultLayout';
import Loading from '../layout/Loading';
import AutoSuggestionTextInput from '../layout/AutoSuggestionTextInput';
import DatePicker from '../layout/DatePicker';
import Button from '../layout/Button';

import * as SC from './travel.styles';
import countryList from '../../lib/countryList.json';
import airplaneLoading from '../../assets/images/airplaneLoading.gif';

const Travel = ({
  requestCrawling,
  loading,
  error,
  clearError
}) => {
  const [ country, setCountry ] = useState('');
  const [ countrySuggestions, setCountrySuggestions ] = useState([]);
  const [ city, setCity ] = useState('');
  const [ targetCities, setTargetCities ] = useState([]);
  const [ citySuggestions, setCitySuggestions ] = useState([]);
  const [ travelDates, setTravelDates ] = useState([
    new Date(), new Date(new Date().setDate(new Date().getDate() + 1))
  ]);

  useEffect(() => {
    if (error) {
      window.alert('데이터를 불러오는 도중 에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
      clearError();
    }

    // eslint-disable-next-line
  }, [ error ]);

  const onCountryInputChange = e => {
    setCountry(e.target.value);

    const country = e.target.value.toLowerCase();
    const tempCountryList = [];

    if (country.length) {
      countryList.forEach(({ Name }) => {
        Name.toLowerCase().includes(country) && tempCountryList.push(Name);
      });

      setCountrySuggestions(tempCountryList.sort());
    } else {
      setCity('');
      setCountrySuggestions([]);
      setCitySuggestions([]);
    }
  };

  const onCountrySuggestionClick = countryName => {
    setCountry(countryName);
    setCity('');
    setCountrySuggestions([]);

    for (const country of countryList) {
      if (country.Name === countryName) {
        setTargetCities(country.Cities.map(city => city.Name));
        setCitySuggestions(country.Cities.map(city => city.Name));
      }
    }
  };

  const onCityInputChange = e => {
    setCity(e.target.value);

    const city = e.target.value.toLowerCase();
    const cities = [ ...targetCities ];
    const tempCityList = [];

    if (city.length) {
      cities.forEach(cityName => {
        cityName.toLowerCase().includes(city) && tempCityList.push(cityName);
      });

      setCitySuggestions(tempCityList.sort());
    } else {
      setCitySuggestions(targetCities);
    }
  };

  const onCitySuggestionClick = cityName => {
    setCity(cityName);
    setCitySuggestions([]);
  };

  const onSubmit = (e, country, city, travelDates) => {
    e.preventDefault();

    if (!country) window.alert('여행 국가를 선택해주세요.');
    else if (!city) window.alert('도시를 선택해주세요.');
    else if (!travelDates.length) window.alert('날짜를 선택해주세요.');
    else requestCrawling(country, city, travelDates);
  };

  return (
      loading ?
      <Loading message='항공권과 숙박 정보를 조회 중입니다' loadingImg={airplaneLoading} /> :
      <DefaultLayout>
        <SC.Travel.Wrapper>
          <h1>어디로 떠나볼까요?</h1>
          <h3>원하는 여행지와 날짜를 선택하세요.</h3>
          <SC.Travel.Form>
            <AutoSuggestionTextInput
              title='✈️ 국가 선택'
              placeholder='국가를 입력하세요.'
              name='country'
              onInputChange={onCountryInputChange}
              inputValue={country}
              suggestionList={countrySuggestions}
              onSuggestionClick={onCountrySuggestionClick}
            />
            <AutoSuggestionTextInput
              title='🚕 도시 선택'
              placeholder='도시를 선택하세요.'
              name='city'
              onInputChange={onCityInputChange}
              inputValue={city}
              suggestionList={citySuggestions}
              onSuggestionClick={onCitySuggestionClick}
            />
            <DatePicker
              title='🗓 여행날짜'
              inputDates={travelDates}
              onDatesChange={setTravelDates}
            />
            <div className='button-container'>
              <Button onClick={e => onSubmit(e, country, city, travelDates)}>검색</Button>
            </div>
          </SC.Travel.Form>
        </SC.Travel.Wrapper>
      </DefaultLayout>
  );
};

export default Travel;
