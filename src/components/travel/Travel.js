import React from 'react';
import styled from 'styled-components';

import AutoSuggestionTextInput from '../layout/AutoSuggestionTextInput';

import coverImg from '../../assets/images/coverImg.png';

// 전체 페이지 컴포넌트 만들고
// 달력, 날짜 등 하는 컴포넌트 따로 만들어서 import하기
const Travel = ({
  countryList,
  country,
  countrySuggestions,
  onInputChange,
  onSuggestionClick,
  // travelDates
}) => {
  return (
    <Wrapper>
      <h1>어디로 떠나볼까요?</h1>
      <h3>원하는 여행지와 날짜를 선택하세요.</h3>
      <Form>
        <AutoSuggestionTextInput
          label='✈️ 여행지'
          itemList={countryList}
          inputValue={country}
          autoSuggestionList={countrySuggestions}
          onInputChange={onInputChange}
          onSuggestionClick={onSuggestionClick}
        />
      </Form>
    </Wrapper>
  )
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
  background-color: #02122c;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export default Travel;

