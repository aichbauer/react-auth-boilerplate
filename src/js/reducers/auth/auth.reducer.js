import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../../actions/auth/login';
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../../actions/auth/register';
import {
  CHECK_TOKEN_SUCCESS,
  CHECK_TOKEN_FAILURE,

} from '../../actions/auth/token';
import {
  LOGOUT_SUCCESS,
} from '../../actions/auth/logout';

const auth = (state = {
  isFetching: false,
  isAuthenticated: false,
  token: '',
  user: {},
  error: '',
}, action) => {
  switch (action.type) {

    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        token: action.token,
        user: action.user,
        error: action.error,
      });

    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        token: action.token,
        user: action.user,
        error: action.error,
      });

    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        token: action.token,
        user: action.user,
        error: action.error,
      });


    case REGISTER_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        token: action.token,
        user: action.user,
        error: action.error,
      });

    case REGISTER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        token: action.token,
        user: action.user,
        error: action.error,
      });

    case REGISTER_FAILURE:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        token: action.token,
        user: action.user,
        error: action.error,
      });


    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        token: action.token,
        user: action.user,
        error: action.error,
      });


    case CHECK_TOKEN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        token: action.token,
        error: action.error,
      });

    case CHECK_TOKEN_FAILURE:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        token: action.token,
        error: action.error,
      });

    default:
      return state;

  }
};

export default auth;
