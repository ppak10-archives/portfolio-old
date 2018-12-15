/**
 * App.container.jsx
 * Wrapper container to introduce Redux Store and Router to App component
 */

// Node Modules
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

// Components
import AppComponent from '../components/App.component';

// Helpers
import {tokenAuthentication} from '../helpers';

const mapDispatchToProps = (dispatch) => {
  return {
    userAuthentication: (tokenName) => tokenAuthentication(tokenName),
  };
};

export const App = withRouter(connect(null, mapDispatchToProps)(AppComponent));
