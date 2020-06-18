import { combineReducers } from 'redux';
import User from './User';

const appReducer = combineReducers({
  User,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
