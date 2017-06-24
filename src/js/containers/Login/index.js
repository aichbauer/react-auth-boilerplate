import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, Email, Password, Button } from 'redux-valid-form';

import LoginWrapper from '../../components/Wrapper/100Height100Width/';
import CenterWrapper from '../../components/Wrapper/MarginAuto/';

class Login extends Component {
  handleLogin(inputs) { // eslint-disable-line
    Object.entries(inputs).forEach((input) => console.log(input));
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
};

const matchDispatchToProps = (dispatch) => (bindActionCreators({
}, dispatch));

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, matchDispatchToProps)(Login);
