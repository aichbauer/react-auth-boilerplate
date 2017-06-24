import axios from 'axios';
import { hashHistory } from 'react-router';

import { BASE_API_URL, VALIDATE_ROUTE } from '../../../config/api.routes';

export const CHECK_TOKEN_SUCCESS = 'CHECK_TOKEN_SUCCESS';
export const CHECK_TOKEN_FAILURE = 'CHECK_TOKEN_FAILURE';

const receiveValidToken = () => ({
  type: CHECK_TOKEN_SUCCESS,
  isFetching: true,
  isAuthenticated: true,
  error: '',
});

const errorValidToken = (error) => ({
  type: CHECK_TOKEN_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  error,
});

export const isAuthorized = (token) => (
  (dispatch) => (
    axios.post(BASE_API_URL + VALIDATE_ROUTE, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      token: token || '',
    })
      .then((response) => {
        if (response.data.isvalid === true) {
          return dispatch(receiveValidToken());
        }

        return hashHistory.push('/');
      })
      .catch((error) => {
        dispatch(errorValidToken(error));
        return hashHistory.push('/');
      })
  )
);
