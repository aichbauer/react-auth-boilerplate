import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, Email, Password, Button } from 'redux-valid-form';

import RegisterWrapper from '../../components/Wrapper/100Height100Width';
import CenterWrapper from '../../components/Wrapper/MarginAuto';

class Login extends Component {
  handleRegister(inputs) { // eslint-disable-line
    Object.entries(inputs).forEach((input) => console.log(input));
  }

  render() {
    return (

      <RegisterWrapper>
        <CenterWrapper>
          <Form id="my-form-id">
            <Email id="email" required="true" />
            <Password id="password" required="true" />
            <Password id="password2" required="true" />
            <Button
              id="Register"
              value="Registrieren"
              onClick={(inputs) => this.handleRegister(inputs)}
            />
          </Form>
        </CenterWrapper>
      </RegisterWrapper>
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
