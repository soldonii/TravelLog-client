import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';

import Navbar from '../components/layout/Navbar';
import Dashboard from '../components/dashboard/Dashboard';
import Button from '../components/layout/Button';
import SlideModal from '../components/dashboard/SlideModal';

import logo from '../assets/images/logo.png';

import { logout } from '../actions/auth.action';

const DashboardContainer = ({
  isAuthenticated,
  logout
}) => {
  const [ shouldModalOpen, setShouldModalOpen ] = useState(true);

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
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  logout: logout(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
