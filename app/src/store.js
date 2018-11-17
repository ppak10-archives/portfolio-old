import {createStore} from 'redux';

import rootReducer from './reducers';

/**
 * Function to configure Redux store
 * @param  {[type]} preloadedState [description]
 * @return {[type]}                [description]
 */
export default function configureStore(preloadedState) {
  return createStore(rootReducer);
}
