import React, { useEffect, Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GlobalStyle from '../components/layout/GlobalStyle';
import ProtectedRoute from '../components/routes/ProtectedRoute';

import AuthContainer from './Auth.container';
import TravelContainer from './Travel.container';

import setTokenToHeader from '../lib/auth';
import history from '../lib/history';

const AppContainer = ({
  isAuthenticated,
  userId
}) => {
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
          <ProtectedRoute
            path={`/users/${userId}/travel`}
            component={TravelContainer}
            isAuthenticated={isAuthenticated}
          />
        </Switch>
      </Router>
    </Fragment>
  );
};

AppContainer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  userId: PropTypes.string
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  userId: state.auth.userId
});

export default connect(mapStateToProps, null)(AppContainer);
