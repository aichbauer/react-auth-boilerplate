import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, Email, Password, Button } from 'redux-valid-form';
import PropTypes from 'prop-types';

import LoginWrapper from '../../components/Wrapper/100Height100Width/';
import CenterWrapper from '../../components/Wrapper/MarginAuto/';

import { login } from '../../actions/auth/login';

class Login extends Component {
  handleLogin(inputs) {
    this.props.login(inputs);
  }

  render() {
    return (

      <LoginWrapper>
        <CenterWrapper>
          <Form id="login-form">
            <Email id="email" required="true" />
            <Password id="password" required="true" />
            <Button value="Login" onClick={(inputs) => this.handleLogin(inputs)} />
          </Form>
        </CenterWrapper>
      </LoginWrapper>
    );
  }
}

Login.defaultProps = {
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const matchDispatchToProps = (dispatch) => (bindActionCreators({
  login,
}, dispatch));

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, matchDispatchToProps)(Login);
