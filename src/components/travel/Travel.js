import React from 'react';
import * as SC from './travel.styles';

import DefaultLayout from '../layout/DefaultLayout';
import Loading from '../layout/Loading';
import AutoSuggestionTextInput from '../layout/AutoSuggestionTextInput';
import DatePicker from '../layout/DatePicker';
import Button from '../layout/Button';

import airplaneLoading from '../../assets/images/airplaneLoading.gif';

const Travel = ({
  country,
  onCountryInputChange,
  countrySuggestions,
  onCountrySuggestionClick,
  city,
  onCityInputChange,
  citySuggestions,
  onCitySuggestionClick,
  travelDates,
  onDatesChange,
  onSubmit,
  loading,
  error
}) => {
  return (
    loading ?
    <Loading message='항공권과 숙박 정보를 조회 중입니다' loadingImg={airplaneLoading} /> :
    <DefaultLayout>
      <SC.Travel.Wrapper>
        <h1>어디로 떠나볼까요?</h1>
        <h3>원하는 여행지와 날짜를 선택하세요.</h3>
        <SC.Travel.Form>
          <AutoSuggestionTextInput
            title='✈️ 나라 선택'
            placeholder='나라를 입력하세요.'
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
            onDatesChange={onDatesChange}
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
