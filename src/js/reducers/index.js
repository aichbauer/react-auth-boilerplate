import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
  reduxValidButton,
  reduxValidForm,
  reduxValidInput,
} from 'redux-valid-form';

import authReducer from './auth/auth.reducer';

const allReducers = combineReducers({
  routing: routerReducer,
  auth: authReducer,
  reduxValidButton,
  reduxValidForm,
  reduxValidInput,
});

export default allReducers;
