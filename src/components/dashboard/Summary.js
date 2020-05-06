import React from 'react';
import PropTypes from 'prop-types';
import Scrollable from '../layout/Scrollable';

import { iconsByName } from './categoryIcon';

import { numberWithCommas } from '../../lib/index';

import * as SC from './dashboard.styles';

const Summary = ({
  spendingByDates,
  onSpendingListClick
}) => (
  <Scrollable>
    {Object.entries(spendingByDates).map(([day, spendingData]) => (
      <SC.Summary.ByDates key={day}>
        <h1>{day}</h1>
        {spendingData.map((spending, idx) => {
          const { category, description, amount, location: { title }, spendingId } = spending;

          return (
            <SC.Summary.List key={idx} data-id={spendingId} onClick={() => onSpendingListClick(day, spendingId)}>
              <SC.Summary.Icon>
                <img src={iconsByName[category]} alt={category} />
              </SC.Summary.Icon>
              <SC.Summary.Description>
                <div>
                  <h5 className='description'>{description}</h5>
                  <h5 className='amount'>{`₩ ${numberWithCommas(amount)}원`}</h5>
                </div>
                <h6 className='location-title'>{title}</h6>
              </SC.Summary.Description>
            </SC.Summary.List>
          );
        })}
      </SC.Summary.ByDates>
    ))}
  </Scrollable>
);

Summary.propTypes = {
  spendingByDates: PropTypes.object.isRequired,
  onSpendingListClick: PropTypes.func.isRequired
};

export default Summary;
