import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DateRangePicker from '@wojtekmaj/react-daterange-picker'

const DatePicker = ({
  title,
  inputDates,
  onDatesChange
}) => (
  <DatePickerWrapper>
    <p>{title}</p>
    <DateRangePicker
      className='calendar'
      onChange={onDatesChange}
      value={inputDates}
    />
  </DatePickerWrapper>
);

const DatePickerWrapper = styled.div`
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

  .calendar {
    background-color: white;
    width: 100%;
    min-width: 19rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;

    div {
      width: 100%;
      border: none;
      font-size: 1.5rem;
    }

    @media (max-width: 760px) {
      div {
        width: 100%;
        border: none;
        font-size: 1rem;
      }
    }

    .react-daterange-picker__inputGroup {
      display: flex;
      justify-content: space-evenly;

      span {
        color: black;
      }
    }

    .react-daterange-picker__calendar {
      border-radius: 0.5rem;
      box-shadow: 1px 1px 2px grey;
    }
  }
`;

DatePicker.propTypes = {
  title: PropTypes.string.isRequired,
  inputDates: PropTypes.array.isRequired,
  onDatesChange: PropTypes.func.isRequired,
};

export default DatePicker;
