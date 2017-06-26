import axios from 'axios';
import { hashHistory } from 'react-router';

import api from '../../../config/api.routes';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const requestLogin = () => ({ // eslint-disable-line no-unused-vars
  type: LOGIN_REQUEST,
  isFetching: true,
  isAuthenticated: false,
  token: '',
  user: {},
  error: '',
});

const receiveLogin = (token, user) => ({
  type: LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  token,
  user,
  error: '',
});

const errorLogin = (error) => ({
  type: LOGIN_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  token: '',
  user: {},
  error,
});

export const login = (creds) => (
  (dispatch) => (
    axios.post(api().LOGIN, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      email: creds.email,
      password: creds.password,
    })
      .then((res) => {
        dispatch(receiveLogin(res.data.token, res.data.user));
        return hashHistory.push('/app');
      })
      .catch((err) => dispatch(errorLogin(err.respond.data.msg)))
  )
);
