import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

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
      value={inputValue === '' ? '' : Math.round(inputValue)}
    />
    <h2>{currencyCode}</h2>
    <h5>=
      <span className='converted-numbers'>
        {` ${numberWithCommas(Math.round(inputValue * currencyExchange))}`}
      </span>원
      <span className='currency-unit'>
        {' '}({`1${currencyCode} 당 ${numberWithCommas(currencyExchange)}원`})
      </span>
    </h5>
  </Fragment>
);

Price.propTypes = {
  inputValue: PropTypes.any,
  onInputChange: PropTypes.func.isRequired,
  currencyExchange: PropTypes.number.isRequired,
  currencyCode: PropTypes.string.isRequired,
};

export default Price;
