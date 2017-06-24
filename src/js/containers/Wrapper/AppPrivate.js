import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { isAuthorized } from '../../actions/auth/token';

class AppPrivate extends Component {
  componentDidMount() {
    this.props.isAuthorized();
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
};

AppPrivate.propTypes = {
  children: React.PropTypes.element,
  isAuthorized: React.PropTypes.func.isRequired,
  isAuthenticated: React.PropTypes.bool.isRequired,
};

const matchDispatchToProps = (dispatch) => (bindActionCreators({
  isAuthorized,
}, dispatch));

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, matchDispatchToProps)(AppPrivate);
