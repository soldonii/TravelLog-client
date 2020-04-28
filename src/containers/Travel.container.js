import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import Navbar from '../components/layout/Navbar';
import Travel from '../components/travel/Travel';
import { logout } from '../actions/auth.action';

import countryList from '../lib/countryList.json';
import logo from '../assets/images/logo.png';


const TravelContainer = ({
  isAuthenticated,
  logout
}) => {
  const [ country, setCountry ] = useState('');
  const [ countrySuggestions, setCountrySuggestions ] = useState([]);
  const [ travelDates, setTravelDates ] = useState('');

  const onInputChange = (e, itemList) => {
    const userInput = e.target.value;
    setCountry(userInput);

    userInput.length ?
      setCountrySuggestions(itemList.filter(({ name }) => {
        return name.toLowerCase().includes(userInput.toLowerCase())
      }).sort()) :
      setCountrySuggestions([]);
  };

  const onSuggestionClick = countryName => {
    setCountry(countryName);
    setCountrySuggestions([]);
  };

  return (
    <Fragment>
      <Navbar isAuthenticated={isAuthenticated} logo={logo}>
        <button onClick={logout}>Logout</button>
      </Navbar>
      <Travel
        countryList={countryList}
        country={country}
        countrySuggestions={countrySuggestions}
        onInputChange={onInputChange}
        onSuggestionClick={onSuggestionClick}
        travelDates={travelDates}
      />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  logout: logout(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TravelContainer);
