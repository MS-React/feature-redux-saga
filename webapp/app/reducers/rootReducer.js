import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { users } from './';

const rootReducer = combineReducers({
  routing,
  users
});

export default rootReducer;
