/**
 * App.container.jsx
 * Wrapper container to introduce Redux Store and Router to App component
 */

// Node Modules
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

// Component
import AppComponent from '../components/App.component';

// Actions
import {userTokenAuthentication as userAuth} from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    userAuthentication: (tokenName) => dispatch(userAuth(tokenName)),
  };
};

export const App = withRouter(connect(null, mapDispatchToProps)(AppComponent));
