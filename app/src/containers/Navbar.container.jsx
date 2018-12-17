/**
 * Navbar.container.jsx
 * Container to map state and dispatches to navbar component
 */

// Node Modules
import {connect} from 'react-redux';

// Actions
import {userLogout} from '../actions';

// Component
import NavbarComponent from '../components/Navbar.component';

const mapStateToProps = (state) => ({
  alert: state.alert,
  authentication: state.authentication,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(userLogout()),
});

export const Navbar = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavbarComponent);
