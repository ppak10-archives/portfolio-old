/**
 * Alert.container.jsx
 * Container to provide Redux Store to alert component
 */

/**
 * Node Modules
 */

import {connect} from 'react-redux';

/**
 * Alert Components
 */

import {Alert as AlertComponent} from '../components/Alert.component';
const mapStateToProps = (state) => ({
  type: state.alert.type,
  message: state.alert.message,
});

const Alert = connect(mapStateToProps)(AlertComponent);
export {Alert};
