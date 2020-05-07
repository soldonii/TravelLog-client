import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GlobalStyle from '../components/layout/GlobalStyle';
import ProtectedRoute from '../components/routes/ProtectedRoute';
import PageNotFound from '../components/layout/PageNotFound';

import AuthContainer from './Auth.container';
import TravelContainer from './Travel.container';
import DashboardContainer from './Dashboard.container';

import history from '../lib/history';

const AppContainer = ({
  isAuthenticated,
  userId,
  travelId
}) => (
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
        <ProtectedRoute
          path={`/users/${userId}/dashboard/${travelId}`}
          component={DashboardContainer}
          isAuthenticated={isAuthenticated}
        />
        <Route path='*' component={PageNotFound} />
      </Switch>
    </Router>
  </Fragment>
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  userId: state.auth.userId,
  travelId: state.travel.travelId
});

AppContainer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  userId: PropTypes.string
};

export default connect(mapStateToProps, null)(AppContainer);
