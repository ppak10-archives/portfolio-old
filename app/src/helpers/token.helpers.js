/**
 * token.helper.js
 * Helper functions for token actions
 */

// Actions
import {
  authenticateToken as authToken,
} from '../services';

// Redux Store
import {store} from '../containers/App.container';

export const tokenAuthentication = async (tokenName) => {
  const token = localStorage.getItem(tokenName);
  if (!token || token === '') {
    console.log('no token')
    return;
  } else {
    const response = await authToken(token, tokenName);
    console.log(response);
  }
}