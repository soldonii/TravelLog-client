import React from 'react';

import DefaultLayout from '../layout/DefaultLayout';
import PieChart from './PieChart';
import Summary from './Summary';
// import Map from './Map';

import * as SC from './dashboard.styles';

const Dashboard = () => {
  return (
    <DefaultLayout>
      <SC.Dashboard.Wrapper>
        <PieChart />
      </SC.Dashboard.Wrapper>
      <SC.Dashboard.Wrapper>
        <Summary />
      </SC.Dashboard.Wrapper>
      <SC.Dashboard.Wrapper>
        {/* <Map /> */}
      </SC.Dashboard.Wrapper>
    </DefaultLayout>
  );
};

export default Dashboard;
