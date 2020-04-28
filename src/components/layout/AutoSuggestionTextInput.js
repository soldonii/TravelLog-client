import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AutoSuggestionTextInput = ({
  label,
  itemList,
  inputValue,
  autoSuggestionList,
  onInputChange,
  onSuggestionClick
}) => (
  <Wrapper>
    <p>{label}</p>
    <InputContainer>
      <input
        type='text'
        name='country'
        id='country'
        placeholder='국가를 입력하세요.'
        onChange={e => onInputChange(e, itemList)}
        value={inputValue}
      />
      <div className='list-container'>
        <ul>
          {autoSuggestionList.map(({ name }) => (
            <li key={name} onClick={() => onSuggestionClick(name)} >{name}</li>
          ))}
        </ul>
      </div>
    </InputContainer>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40rem;
  margin-bottom: 2rem;

  p {
    font-size: 1.5rem;
    width: 100%;
    text-align: left;
    margin-bottom: 1rem;
  }
`;

const InputContainer = styled.div`
  border: 1px solid white;
  position: relative;

  input {
    width: 40rem;
    padding: 0.5rem;
    font-size: 1.5rem;
  }

  .list-container {
    max-height: 15rem;
    width: 40rem;
    overflow: scroll;
    overflow-x: hidden;
    position: absolute;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      background-color: white;
      color: black;
      font-size: 1.5rem;

      li {
        padding: 1rem;
        cursor: pointer;
      }

      li:hover {
        background-color: #e0e0e0;
      }
    }
  }

  .list-container::-webkit-scrollbar {
    display: none;
  }
`;

AutoSuggestionTextInput.propTypes = {
  label: PropTypes.string,
  itemList: PropTypes.array,
  inputValue: PropTypes.string,
  autoSuggestionList: PropTypes.array,
  onInputChange: PropTypes.func,
  onSuggestionClick: PropTypes.func,
};

export default AutoSuggestionTextInput;
