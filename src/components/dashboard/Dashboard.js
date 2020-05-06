import React from 'react';
import PropTypes from 'prop-types';

import DefaultLayout from '../layout/DefaultLayout';
import PieChart from './PieChart';
import Summary from './Summary';
import Map from './Map';

import * as SC from './dashboard.styles';

const Dashboard = ({
  spendingByDates,
  onSpendingListClick,
  spendingByCategory,
  latLngs,
  travelCountry
}) => (
  <DefaultLayout>
    <SC.Dashboard.Wrapper>
      <PieChart spendingByCategory={spendingByCategory} />
    </SC.Dashboard.Wrapper>
    <SC.Dashboard.Wrapper>
      <Summary
        spendingByDates={spendingByDates}
        onSpendingListClick={onSpendingListClick}
      />
    </SC.Dashboard.Wrapper>
    <SC.Dashboard.Wrapper>
      <Map
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%', width: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        coordinates={latLngs}
        travelCountry={travelCountry}
      />
    </SC.Dashboard.Wrapper>
  </DefaultLayout>
);

Dashboard.propTypes = {
  spendingByDates: PropTypes.object.isRequired,
  onSpendingListClick: PropTypes.func.isRequired,
  spendingByCategory: PropTypes.object.isRequired,
  latLngs: PropTypes.array.isRequired,
  travelCountry: PropTypes.string.isRequired,
};

export default Dashboard;
