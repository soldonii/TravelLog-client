import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Navbar from '../components/layout/Navbar';
import SlideInModal from '../components/layout/SlideInModal';
import Travel from '../components/travel/Travel';
import Booking from '../components/travel/Booking';
import PurchaseCandidates from '../components/travel/PurchaseCandidates';
import Button from '../components/layout/Button';

import { logout } from '../actions/auth.action';
import {
  requestCrawling,
  clearError,
  addFlightToStack,
  addAccomodationToStack,
  selectFlightTicket,
  deselectFlightTicket,
  selectAccomodation,
  deselectAccomodation,
  saveTravelId
} from '../actions/travel.action';

import logo from '../assets/images/logo.png';

const TravelContainer = ({
  history,
  userId,
  isAuthenticated,
  loading,
  error,
  kayakData,
  airbnbData,
  flightStack,
  accomodationStack,
  boughtFlight,
  boughtAccomodation,
  travelCountry,
  travelDayList,
  logout,
  requestCrawling,
  clearError,
  addFlightToStack,
  addAccomodationToStack,
  selectFlightTicket,
  deselectFlightTicket,
  selectAccomodation,
  deselectAccomodation,
  saveTravelId
}) => {
  const [ shouldModalOpen, setShouldModalOpen ] = useState(false);

  return (
    <Fragment>
      <Navbar isAuthenticated={isAuthenticated} logo={logo}>
        {kayakData.length && airbnbData.length ?
          <Button onClick={() => setShouldModalOpen(true)}>다음</Button> : null}
        <Button onClick={logout}>로그아웃</Button>
      </Navbar>
      <SlideInModal shouldModalOpen={shouldModalOpen} setShouldModalOpen={setShouldModalOpen}>
        <PurchaseCandidates
          history={history}
          flightStack={flightStack}
          accomodationStack={accomodationStack}
          boughtFlight={boughtFlight}
          boughtAccomodation={boughtAccomodation}
          selectFlightTicket={selectFlightTicket}
          deselectFlightTicket={deselectFlightTicket}
          selectAccomodation={selectAccomodation}
          deselectAccomodation={deselectAccomodation}
          travelCountry={travelCountry}
          travelDayList={travelDayList}
          saveTravelId={saveTravelId}
          userId={userId}
        />
      </SlideInModal>
      {kayakData.length || airbnbData.length ?
        <Booking
          flights={kayakData}
          accommodations={airbnbData}
          addFlightToStack={addFlightToStack}
          addAccomodationToStack={addAccomodationToStack}
          boughtFlight={boughtFlight}
          boughtAccomodation={boughtAccomodation}
          selectFlightTicket={selectFlightTicket}
          deselectFlightTicket={deselectFlightTicket}
          selectAccomodation={selectAccomodation}
          deselectAccomodation={deselectAccomodation}
        /> :
        <Travel
          requestCrawling={requestCrawling}
          loading={loading}
          error={error}
          clearError={clearError}
        />
      }
    </Fragment>
  );
};

TravelContainer.propTypes = {
  history: PropTypes.object.isRequired,
  userId: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  kayakData: PropTypes.array.isRequired,
  airbnbData: PropTypes.array.isRequired,
  flightStack: PropTypes.array.isRequired,
  accomodationStack: PropTypes.array.isRequired,
  boughtFlight: PropTypes.object.isRequired,
  boughtAccomodation: PropTypes.object.isRequired,
  travelCountry: PropTypes.string.isRequired,
  travelDayList: PropTypes.array.isRequired,
  logout: PropTypes.func.isRequired,
  requestCrawling: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
  addFlightToStack: PropTypes.func.isRequired,
  addAccomodationToStack: PropTypes.func.isRequired,
  selectFlightTicket: PropTypes.func.isRequired,
  deselectFlightTicket: PropTypes.func.isRequired,
  selectAccomodation: PropTypes.func.isRequired,
  deselectAccomodation: PropTypes.func.isRequired,
  saveTravelId: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userId: state.auth.userId,
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.travel.loading,
  error: state.travel.error,
  kayakData: state.travel.kayakData,
  airbnbData: state.travel.airbnbData,
  flightStack: state.travel.flightStack,
  accomodationStack: state.travel.accomodationStack,
  boughtFlight: state.travel.boughtFlight,
  boughtAccomodation: state.travel.boughtAccomodation,
  flightPrice: state.travel.flightPrice,
  accomodationPrice: state.travel.accomodationPrice,
  travelCountry: state.travel.travelCountry,
  travelDayList: state.travel.travelDayList
});

const mapDispatchToProps = dispatch => ({
  logout: logout(dispatch),
  requestCrawling: requestCrawling(dispatch),
  addFlightToStack: addFlightToStack(dispatch),
  addAccomodationToStack: addAccomodationToStack(dispatch),
  selectFlightTicket: selectFlightTicket(dispatch),
  deselectFlightTicket: deselectFlightTicket(dispatch),
  selectAccomodation: selectAccomodation(dispatch),
  deselectAccomodation: deselectAccomodation(dispatch),
  saveTravelId: saveTravelId(dispatch),
  clearError: clearError(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TravelContainer);
