import React, { Fragment } from 'react';

import { numberWithCommas } from '../../lib/index';

const Price = ({
  inputValue,
  onInputChange,
  currencyExchange,
  currencyCode
}) => (
  <Fragment>
    <input
      type='number'
      placeholder='금액입력'
      onChange={e => onInputChange(e.target.value)}
      value={inputValue}
    />
    <h2>{currencyCode}</h2>
    <h5>=
      <span className='converted-numbers'>
        {` ${numberWithCommas(inputValue * currencyExchange)}`}
      </span>원
      <span className='currency-unit'>
        {' '}({`1${currencyCode} 당 ${numberWithCommas(currencyExchange)}원`})
      </span>
    </h5>
  </Fragment>
);

export default Price;
