import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import Navbar from '../components/layout/Navbar';
import Dashboard from '../components/dashboard/Dashboard';
import Button from '../components/layout/Button';
import SlideInModal from '../components/layout/SlideInModal';
import Register from '../components/dashboard/Register';

import logo from '../assets/images/logo.png';

import { logout } from '../actions/auth.action';
import { getInitialData, registerSpending } from '../actions/dashboard.actions';

const DashboardContainer = ({
  isAuthenticated,
  travelId,
  travelCountry,
  spendingByDates,
  currencyExchange,
  currencyCode,

  getInitialData,
  registerSpending,
  logout
}) => {
  const [ shouldModalOpen, setShouldModalOpen ] = useState(false);
  const [ chosenSpending, setChosenSpending ] = useState({});

  useEffect(() => {
    getInitialData(travelId);

    // eslint-disable-next-line
  }, []);

  const onSpendingListClick = (day, spendingId) => {
    const targetList = spendingByDates[day].find(list => list.spendingId === spendingId);
    targetList.day = day;

    setShouldModalOpen(true);
    setChosenSpending(targetList);
  };

  return (
    <Fragment>
      <Navbar isAuthenticated={isAuthenticated} logo={logo}>
        <Button>내 여행</Button>
        <Button onClick={() => setShouldModalOpen(true)}>지출 등록</Button>
        <Button onClick={logout}>로그아웃</Button>
      </Navbar>
      <SlideInModal shouldModalOpen={shouldModalOpen} setShouldModalOpen={setShouldModalOpen}>
        <Register
          shouldModalOpen={shouldModalOpen}
          setShouldModalOpen={setShouldModalOpen}
          travelId={travelId}
          spendingByDates={spendingByDates}
          currencyExchange={currencyExchange}
          currencyCode={currencyCode}
          registerSpending={registerSpending}
          chosenSpending={chosenSpending}
          setChosenSpending={setChosenSpending}
        />
      </SlideInModal>
      <Dashboard
        spendingByDates={spendingByDates}
        onSpendingListClick={onSpendingListClick}
      />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  travelId: state.travel.travelId,
  travelCountry: state.dashboard.travelCountry,
  spendingByDates: state.dashboard.spendingByDates,
  currencyExchange: state.dashboard.currencyExchange,
  currencyCode: state.dashboard.currencyCode,
  loading: state.dashboard.loading,
  error: state.dashboard.error,
});

const mapDispatchToProps = dispatch => ({
  logout: logout(dispatch),
  getInitialData: getInitialData(dispatch),
  registerSpending: registerSpending(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
