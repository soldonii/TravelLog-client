import React from 'react';
import styled from 'styled-components';

import AutoSuggestionTextInput from '../layout/AutoSuggestionTextInput';
import DatePicker from '../layout/DatePicker';
import Button from '../layout/Button';

import coverImg from '../../assets/images/coverImg.png';

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
    <Wrapper>
      <h1>어디로 떠나볼까요?</h1>
      <h3>원하는 여행지와 날짜를 선택하세요.</h3>
      <Form>
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
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-image: url(${coverImg});
  background-size: cover;
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 10vh 10vw;
  color: white;

  h1 {
    font-size: 6rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
`;

const Form = styled.form`
  height: 100%;
  width: 100%;
  background-color: rgba(2, 18, 44, 0.7);
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  position: relative;

  .button-container {
    position: absolute;
    right: 2rem;
    bottom: 2rem;
  }
`;

export default Travel;

