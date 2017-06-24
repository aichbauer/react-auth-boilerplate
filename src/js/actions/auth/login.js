import axios from 'axios';
import { hashHistory } from 'react-router';

import { BASE_API_URL, LOGIN_ROUTE } from '../../../config/api.routes';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const requestLogin = () => ({ // eslint-disable-line no-unused-vars
  type: LOGIN_REQUEST,
  isFetching: true,
  isAuthenticated: false,
  token: '',
  error: '',
});

const receiveLogin = (user) => ({
  type: LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  token: user.token,
  error: '',
});

const errorLogin = (error) => ({
  type: LOGIN_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  token: '',
  error,
});

export const login = (creds) => (
  (dispatch) => (
    axios.post(BASE_API_URL + LOGIN_ROUTE, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      email: creds.email,
      password: creds.password,
    })
      .then((res) => {
        dispatch(receiveLogin(res.data.usrr));
        return hashHistory.push('/app');
      })
      .catch((error) => dispatch(errorLogin(error)))
  )
);
