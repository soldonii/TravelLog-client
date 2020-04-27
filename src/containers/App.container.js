import React, { useEffect, Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GlobalStyle from '../components/layout/GlobalStyle';
import AuthContainer from './Auth.container';
// import ProtectedRoute from '../components/routes/ProtectedRoute';

import setTokenToHeader from '../lib/auth';
import history from '../lib/history';


const AppContainer = ({ isAuthenticated }) => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    token && setTokenToHeader(token);
  }, []);

  return (
    <Fragment>
      <GlobalStyle />
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={AuthContainer} />
        </Switch>
      </Router>
    </Fragment>
  );
};

AppContainer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, null)(AppContainer);
