import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import Navbar from '../components/layout/Navbar';
import SlideInModal from '../components/layout/SlideInModal';
import Travel from '../components/travel/Travel';
import Booking from '../components/travel/Booking';

import { logout } from '../actions/auth.action';
import {
  requestCrawling,
  addFlightToStack,
  addAccomodationToStack,
  selectFlightTicket,
  deselectFlightTicket,
  selectAccomodation,
  deselectAccomodation,
  saveFlightAndAccomodation
} from '../actions/travel.action';

import countryList from '../lib/countryList.json';
import logo from '../assets/images/logo.png';

const TravelContainer = ({
  isAuthenticated,
  loading,
  error,
  kayakData,
  airbnbData,
  flightStack,
  accomodationStack,
  boughtFlight,
  boughtAccomodation,
  logout,
  requestCrawling,
  addFlightToStack,
  addAccomodationToStack,
  selectFlightTicket,
  deselectFlightTicket,
  selectAccomodation,
  deselectAccomodation,
  saveFlightAndAccomodation
}) => {
  const [ country, setCountry ] = useState('');
  const [ countrySuggestions, setCountrySuggestions ] = useState([]);
  const [ city, setCity ] = useState('');
  const [ targetCities, setTargetCities ] = useState([]);
  const [ citySuggestions, setCitySuggestions ] = useState([]);
  const [ travelDates, setTravelDates ] = useState([
    new Date(), new Date(new Date().setDate(new Date().getDate() + 1))
  ]);
  const [ shouldModalOpen, setShouldModalOpen ] = useState(false);

  const onCountryInputChange = e => {
    setCountry(e.target.value);

    const country = e.target.value.toLowerCase();
    const tempCountryList = [];

    if (country.length) {
      countryList.forEach(({ Name }) => {
        Name.toLowerCase().includes(country) && tempCountryList.push(Name);
      });

      setCountrySuggestions(tempCountryList.sort());
    } else {
      setCity('');
      setCountrySuggestions([]);
      setCitySuggestions([]);
    }
  };

  const onCityInputChange = e => {
    setCity(e.target.value);

    const city = e.target.value.toLowerCase();
    const cities = [ ...targetCities ];
    const tempCityList = [];

    if (city.length) {
      cities.forEach(cityName => {
        cityName.toLowerCase().includes(city) && tempCityList.push(cityName);
      });

      setCitySuggestions(tempCityList.sort());
    } else {
      setCitySuggestions(targetCities);
    }
  };

  const onCountrySuggestionClick = countryName => {
    setCountry(countryName);
    setCity('');
    setCountrySuggestions([]);

    for (const country of countryList) {
      if (country.Name === countryName) {
        setTargetCities(country.Cities.map(city => city.Name));
        setCitySuggestions(country.Cities.map(city => city.Name));
      }
    }
  };

  const onCitySuggestionClick = cityName => {
    setCity(cityName);
    setCitySuggestions([]);
  };

  const onSubmit = (e, country, city, travelDates) => {
    e.preventDefault();
    requestCrawling(country, city, travelDates);
  };

  const onFlightLinkClick = (flightInfo, selectedOption) => {
    addFlightToStack(flightInfo, selectedOption);
    window.open(selectedOption.link, '_blank');
  };

  const onAccomodationLinkClick = (description, title, price, image, link) => {
    addAccomodationToStack(description, title, price, image);
    window.open(link, '_blank');
  };

  const onFlightClick = (e, flight) => {
    if (!Object.keys(boughtFlight).length) {
      e.target.style.backgroundColor = '#45c43c';
      selectFlightTicket(flight);
    } else if (JSON.stringify(boughtFlight) === JSON.stringify(flight)) {
      e.target.style.backgroundColor = 'black';
      deselectFlightTicket();
    } else {
      window.alert('한 개의 티켓만 구매티켓으로 등록할 수 있습니다.');
    }
  };

  const onAccomodationClick = (e, accomodation) => {
    const priceSelector = e.currentTarget.children[1].children[2].children[0];

    if (!Object.keys(boughtAccomodation).length) {
      priceSelector.style.color = '#45c43c';
      selectAccomodation(accomodation);
    } else if (JSON.stringify(boughtAccomodation) === JSON.stringify(accomodation)) {
      priceSelector.style.color = 'black';
      deselectAccomodation();
    } else {
      window.alert('한 개의 숙소만 구매숙소로 등록할 수 있습니다.');
    }
  };

  const onModalButtonClick = () => {
    if (!Object.keys(boughtFlight).length || !Object.keys(boughtAccomodation).length ) {
      window.alert('항공편, 숙소 각각 한 개씩 구매를 확정해야 합니다.');
    } else {
      saveFlightAndAccomodation(boughtFlight, boughtAccomodation);
    }
  };

  return (
    <Fragment>
      <Navbar isAuthenticated={isAuthenticated} logo={logo}>
        <button onClick={() => setShouldModalOpen(true)}>다음</button>
        <button onClick={logout}>로그아웃</button>
      </Navbar>
      <SlideInModal
        shouldModalOpen={shouldModalOpen}
        setShouldModalOpen={setShouldModalOpen}
        displayItem1={flightStack}
        displayItem2={accomodationStack}
        onItem1Click={onFlightClick}
        onItem2Click={onAccomodationClick}
        onModalButtonClick={onModalButtonClick}
      />
      {kayakData.length && airbnbData.length ?
        <Booking
          flights={kayakData}
          accommodations={airbnbData}
          onFlightLinkClick={onFlightLinkClick}
          onAccomodationLinkClick={onAccomodationLinkClick}
        /> :
        <Travel
          country={country}
          onCountryInputChange={onCountryInputChange}
          countrySuggestions={countrySuggestions}
          onCountrySuggestionClick={onCountrySuggestionClick}
          city={city}
          onCityInputChange={onCityInputChange}
          citySuggestions={citySuggestions}
          onCitySuggestionClick={onCitySuggestionClick}
          travelDates={travelDates}
          onDatesChange={setTravelDates}
          onSubmit={onSubmit}
          loading={loading}
          error={error}
        />
      }
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.travel.loading,
  error: state.travel.error,
  kayakData: state.travel.kayakData,
  airbnbData: state.travel.airbnbData,
  flightStack: state.travel.flightStack,
  accomodationStack: state.travel.accomodationStack,
  boughtFlight: state.travel.boughtFlight,
  boughtAccomodation: state.travel.boughtAccomodation
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
  saveFlightAndAccomodation: saveFlightAndAccomodation(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TravelContainer);
