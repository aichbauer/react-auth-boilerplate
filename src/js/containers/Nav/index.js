import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { MdMenu } from 'react-icons/lib/md';

import NavWrapper from '../../components/NavWrapper';
import NavItem from '../../components/NavItem';
import NavBrand from '../../components/NavBrand';

class Nav extends Component {
  componentDidMount() {
    console.log('mount');
  }

  render() {
    if (!this.props.isAuthenticated) {
      return (
        <div>
          <NavWrapper>
            <NavBrand>
              <Link to="/">
                BRAND
              </Link>
            </NavBrand>
            <NavItem>
              <Link to="/">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/register">
                Register
              </Link>
            </NavItem>
            <NavItem collapse>
              <MdMenu
                size={30}
                style={{
                  marginTop: '-5px',
                }}
              />
            </NavItem>
          </NavWrapper>
        </div>
      );
    }

    return (
      <div>
        <NavWrapper>
          <NavBrand>
            <Link to="/members">
              BRAND
            </Link>
          </NavBrand>
          <NavItem>
            <Link to="/members">
              Members
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/logout">
              Logout
            </Link>
          </NavItem>
          <NavItem collapse>
            <MdMenu
              size={30}
              style={{
                marginTop: '-5px',
              }}
            />
          </NavItem>
        </NavWrapper>
      </div>
    );
  }
}

Nav.defaultProps = {
};

Nav.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const matchDispatchToProps = (dispatch) => (bindActionCreators({
}, dispatch));

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, matchDispatchToProps)(Nav);
