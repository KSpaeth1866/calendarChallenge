import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import timesReducer from './timesReducer';

const rootReducer = combineReducers({
  times: timesReducer,
  routing,
});

export default rootReducer;
