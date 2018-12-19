/**
 * alert.actions.js
 * Actions to dispatch alerts
 */

// Constants
import {alertActionsConstants} from '../constants';

export const successAlert = (message) => ({
  type: alertActionsConstants.SUCCESS,
  message,
});

export const errorAlert = (message) => ({
  type: alertActionsConstants.ERROR,
  message,
});
