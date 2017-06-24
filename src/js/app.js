import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  hashHistory,
  IndexRoute,
  Route,
  Router,
} from 'react-router';
import {
  routerMiddleware,
  syncHistoryWithStore,
} from 'react-router-redux';
import {
  applyMiddleware,
  createStore,
} from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import '../css/reset.css';
import '../css/font.css';

import allReducers from './reducers/index';

import App from './containers/Wrapper/App';
import AppPrivate from './containers/Wrapper/AppPrivate';

import LoginPage from './views/Login';
import RegisterPage from './views/Register';


const routingMiddleware = routerMiddleware(hashHistory);

const store = createStore(allReducers, composeWithDevTools(
  applyMiddleware(ReduxThunk, routingMiddleware),
));

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </Route>
      <Route path="/app" component={AppPrivate}>
        <IndexRoute />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

