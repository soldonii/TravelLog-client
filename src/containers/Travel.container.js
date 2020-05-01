import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import Navbar from '../components/layout/Navbar';
import Travel from '../components/travel/Travel';
import Booking from '../components/travel/Booking';

import { logout } from '../actions/auth.action';
import { requestCrawling } from '../actions/travel.action';

import countryList from '../lib/countryList.json';
import logo from '../assets/images/logo.png';

const TravelContainer = ({
  isAuthenticated,
  loading,
  error,
  kayakData,
  airbnbData,
  logout,
  requestCrawling
}) => {
  const [ country, setCountry ] = useState('');
  const [ countrySuggestions, setCountrySuggestions ] = useState([]);
  const [ city, setCity ] = useState('');
  const [ targetCities, setTargetCities ] = useState([]);
  const [ citySuggestions, setCitySuggestions ] = useState([]);
  const [ travelDates, setTravelDates ] = useState([
    new Date(), new Date(new Date().setDate(new Date().getDate() + 1))
  ]);

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

  return (
    <Fragment>
      <Navbar isAuthenticated={isAuthenticated} logo={logo}>
        <button onClick={logout}>Logout</button>
      </Navbar>
      {kayakData.length && airbnbData.length ?
        <Booking
          flights={kayakData}
          accommodations={airbnbData}
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
  airbnbData: state.travel.airbnbData
});

const mapDispatchToProps = dispatch => ({
  logout: logout(dispatch),
  requestCrawling: requestCrawling(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TravelContainer);
