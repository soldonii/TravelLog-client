import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import Navbar from '../components/layout/Navbar';
import Dashboard from '../components/dashboard/Dashboard';
import Button from '../components/layout/Button';
import SlideModal from '../components/dashboard/SlideModal';

import logo from '../assets/images/logo.png';

import { logout } from '../actions/auth.action';
import { getInitialData } from '../actions/dashboard.actions';

const DashboardContainer = ({
  isAuthenticated,
  travelId,
  travelCountry,
  spendingByDates,

  getInitialData,
  logout
}) => {
  const [ shouldModalOpen, setShouldModalOpen ] = useState(true);

  useEffect(() => {
    getInitialData(travelId);

    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Navbar isAuthenticated={isAuthenticated} logo={logo}>
        <Button>내 여행</Button>
        <Button onClick={() => setShouldModalOpen(true)}>지출 등록</Button>
        <Button onClick={logout}>로그아웃</Button>
      </Navbar>
      <SlideModal
        shouldModalOpen={shouldModalOpen}
        setShouldModalOpen={setShouldModalOpen}
      />
      <Dashboard />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  travelId: state.travel.travelId,
  travelCountry: state.dashboard.travelCountry,
  spendingByDates: state.dashboard.spendingByDates,
  loading: state.dashboard.loading,
  error: state.dashboard.error
});

const mapDispatchToProps = dispatch => ({
  logout: logout(dispatch),
  getInitialData: getInitialData(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
