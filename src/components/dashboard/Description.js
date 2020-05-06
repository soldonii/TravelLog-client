import React from 'react';
import PropTypes from 'prop-types';

const Description = ({
  inputValue,
  onInputChange
}) => (
  <input
    type='text'
    placeholder='소비 내용을 입력해주세요.'
    value={inputValue}
    onChange={e => onInputChange(e.target.value)}
  />
);

Description.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Description;
