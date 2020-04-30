import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AutoSuggestionTextInput = ({
  title,
  placeholder,
  name,
  inputValue,
  onInputChange,
  suggestionList,
  onSuggestionClick,
}) => (
  <AutoSuggestionWrapper>
    <p>{title}</p>
    <InputContainer>
      <input
        type='text'
        placeholder={placeholder}
        name={name}
        onChange={e => onInputChange(e)}
        value={inputValue}
      />
      <div className='list-container'>
        <ul>
          {suggestionList.map((item, idx) => (
            <li key={idx} onClick={() => onSuggestionClick(item)}>{item}</li>
          ))}
        </ul>
      </div>
    </InputContainer>
  </AutoSuggestionWrapper>
);

const AutoSuggestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  margin: 2rem;

  p {
    font-size: 1.5rem;
    width: 100%;
    text-align: left;
    margin-bottom: 1rem;
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    padding: 1rem;
    font-size: 1.5rem;
    border-radius: 0.5rem;
    border: none;
  }

  .list-container {
    max-height: 18.5rem;
    width: 100%;
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
  title: PropTypes.string,
  itemList: PropTypes.array,
  inputValue: PropTypes.string,
  autoSuggestionList: PropTypes.array,
  onInputChange: PropTypes.func,
  onSuggestionClick: PropTypes.func,
};

export default AutoSuggestionTextInput;
