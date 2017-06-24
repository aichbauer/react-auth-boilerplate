import { hashHistory } from 'react-router';
import axios from 'axios';

import { BASE_API_URL, REGISTER_ROUTE } from '../../../config/api.routes';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

const requestRegister = () => ({ // eslint-disable-line no-unused-vars
  type: REGISTER_REQUEST,
  isFetching: true,
  isAuthenticated: false,
  token: '',
  user: {},
  error: '',
});

const receiveRegister = (user) => ({
  type: REGISTER_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  token: user.token,
  user,
  error: '',
});

const errorRegister = (error) => ({
  type: REGISTER_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  idToken: '',
  user: {},
  error,
});

export const register = (creds) => (
  (dispatch) => (
    axios.post(BASE_API_URL + REGISTER_ROUTE, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      email: creds.email,
      password: creds.password,
      password2: creds.password2,
    })
      .then((res) => {
        dispatch(receiveRegister(res.data.user));
        return hashHistory.push('/app');
      })
      .catch((error) => dispatch(errorRegister(error)))
  )
);
