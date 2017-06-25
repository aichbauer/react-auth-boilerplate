import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { isAuthorized } from '../../actions/auth/token';

class AppPrivate extends Component {
  componentDidMount() {
    this.props.isAuthorized(this.props.token);
  }

  render() {
    const { isAuthenticated } = this.props;

    return (
      <div>
        {isAuthenticated && this.props.children}
      </div>
    );
  }
}

AppPrivate.defaultProps = {
  children: '',
  token: '',
};

AppPrivate.propTypes = {
  children: PropTypes.element,
  isAuthorized: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  token: PropTypes.string,
};

const matchDispatchToProps = (dispatch) => (bindActionCreators({
  isAuthorized,
}, dispatch));

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  token: state.auth.token,
});

export default connect(mapStateToProps, matchDispatchToProps)(AppPrivate);
