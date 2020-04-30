import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import travelReducer from './travel.reducer';

const appReducer = combineReducers({
  auth: authReducer,
  travel: travelReducer
});

export const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};
