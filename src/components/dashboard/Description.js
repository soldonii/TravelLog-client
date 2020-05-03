import React from 'react';

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

export default Description;
