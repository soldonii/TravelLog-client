import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import travelReducer from './travel.reducer';
import dashboardReducer from './dashboard.reducer';

const appReducer = combineReducers({
  auth: authReducer,
  travel: travelReducer,
  dashboard: dashboardReducer
});

export const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};
