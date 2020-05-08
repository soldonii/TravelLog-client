import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import Navbar from '../components/layout/Navbar';
import Dashboard from '../components/dashboard/Dashboard';
import Button from '../components/layout/Button';
import SlideInModal from '../components/layout/SlideInModal';
import Register from '../components/dashboard/Register';

import logo from '../assets/images/logo.png';

import { logout } from '../actions/auth.action';
import { getDefaultLatLng } from '../lib/index';
import { getInitialData, registerSpending, deleteSpending } from '../actions/dashboard.action';

const DashboardContainer = ({
  history,
  userId,
  isAuthenticated,
  travelId,
  travelCountry,
  spendingByDates,
  currencyExchange,
  currencyCode,
  defaultLatLng,
  getInitialData,
  registerSpending,
  deleteSpending,
  logout
}) => {
  const [ shouldModalOpen, setShouldModalOpen ] = useState(false);
  const [ chosenSpending, setChosenSpending ] = useState({});

  // useEffect(() => {
  //   getInitialData(travelId);
  //   // eslint-disable-next-line
  // }, [ travelId ]);

  const onSpendingListClick = (day, spendingId) => {
    const targetList = spendingByDates[day].find(list => list.spendingId === spendingId);
    targetList.day = day;

    setShouldModalOpen(true);
    setChosenSpending(targetList);
  };

  const spendingByCategory = spendingByDates => {
    const data = {
      항공: 0,
      숙박: 0,
      식비: 0,
      쇼핑: 0,
      관광: 0,
      교통: 0,
      기타: 0
    };

    Object.values(spendingByDates).forEach(lists => {
      lists.forEach(list => data[list.category] += list.amount);
    });

    return data;
  };

  const getLatLngs = spendingByDates => {
    const latLngs = [];

    Object.values(spendingByDates).forEach(lists => {
      lists.forEach(list => {
        if (list.location.coordinates) {
          latLngs.push(list.location.coordinates);
        }
      });
    });

    return latLngs.length ? latLngs : [ getDefaultLatLng() ]
  };

  return (
    <Fragment>
      <Navbar isAuthenticated={isAuthenticated} logo={logo}>
        <Button onClick={() => history.push(`/users/${userId}/travel/travels`)}>내 여행</Button>
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
          defaultLatLng={defaultLatLng}
          deleteSpending={deleteSpending}
        />
      </SlideInModal>
      <Dashboard
        spendingByDates={spendingByDates}
        onSpendingListClick={onSpendingListClick}
        spendingByCategory={spendingByCategory(spendingByDates)}
        latLngs={getLatLngs(spendingByDates)}
        travelCountry={travelCountry}
      />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  userId: state.auth.userId,
  isAuthenticated: state.auth.isAuthenticated,
  travelId: state.travel.travelId,
  travelCountry: state.dashboard.travelCountry,
  spendingByDates: state.dashboard.spendingByDates,
  currencyExchange: state.dashboard.currencyExchange,
  currencyCode: state.dashboard.currencyCode,
  defaultLatLng: state.dashboard.defaultLatLng,
  loading: state.dashboard.loading,
  error: state.dashboard.error,
});

const mapDispatchToProps = dispatch => ({
  logout: logout(dispatch),
  getInitialData: getInitialData(dispatch),
  registerSpending: registerSpending(dispatch),
  deleteSpending: deleteSpending(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
