import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, Email, Password, Button } from 'redux-valid-form';
import PropTypes from 'prop-types';

import RegisterWrapper from '../../components/Wrapper/100Height100Width';
import CenterWrapper from '../../components/Wrapper/MarginAuto';

import { register } from '../../actions/auth/register';

class Login extends Component {
  handleRegister(inputs) {
    this.props.register(inputs);
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
  register: PropTypes.func.isRequired,
};

const matchDispatchToProps = (dispatch) => (bindActionCreators({
  register,
}, dispatch));

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, matchDispatchToProps)(Login);
