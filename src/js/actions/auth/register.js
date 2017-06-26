import { hashHistory } from 'react-router';
import axios from 'axios';

import api from '../../../config/api.routes';

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

const receiveRegister = (token, user) => ({
  type: REGISTER_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  token,
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
    axios.post(api().REGISTER, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      email: creds.email,
      password: creds.password,
      password2: creds.password2,
    })
      .then((res) => {
        dispatch(receiveRegister(res.data.token, res.data.user));
        return hashHistory.push('/app');
      })
      .catch((err) => dispatch(errorRegister(err.respond.data.msg)))
  )
);
