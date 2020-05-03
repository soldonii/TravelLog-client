import React from 'react';

import DefaultLayout from '../layout/DefaultLayout';
import Category from './Category';
import Summary from './Summary';
import GoogleMaps from './GoogleMaps';

import * as SC from './dashboard.styles';

const Dashboard = () => {
  return (
    <DefaultLayout>
      <SC.Dashboard.Wrapper>
        <Category />
      </SC.Dashboard.Wrapper>
      <SC.Dashboard.Wrapper>
        <Summary />
      </SC.Dashboard.Wrapper>
      <SC.Dashboard.Wrapper>
        <GoogleMaps />
      </SC.Dashboard.Wrapper>
    </DefaultLayout>
  )
};

export default Dashboard;
