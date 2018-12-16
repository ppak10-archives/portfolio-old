/**
 * token.helper.js
 * Helper functions for token actions
 */

// Actions
import {authenticationService as authService} from '../services';

// Redux Store
import {store} from '../Root';

export const tokenAuthentication = async (tokenName) => {
  const token = localStorage.getItem(tokenName);
  if (!token || token === '') {
    return;
  } else {
    const response = await authService.authenticateToken(tokenName);
    if (response.status === 'TOKEN_AUTHENTICATION_SUCCESS') {
      console.log('token auth')
    }
  }
}