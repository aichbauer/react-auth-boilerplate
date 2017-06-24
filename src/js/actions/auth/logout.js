import { hashHistory } from 'react-router';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

const requestLogout = () => ({
  type: LOGOUT_REQUEST,
  isFetching: true,
  isAuthenticated: true,
  token: '',
  user: {},
  error: '',
});

const receiveLogout = () => ({
  type: LOGOUT_SUCCESS,
  isFetching: false,
  isAuthenticated: false,
  token: '',
  user: {},
  error: '',
});

const errorLogout = (error) => ({ // eslint-disable-line no-unused-vars
  type: LOGOUT_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  token: '',
  user: {},
  error,
});

export const logout = () => (
  (dispatch) => {
    dispatch(requestLogout());
    dispatch(receiveLogout());
    hashHistory.push('/');
  }
);
