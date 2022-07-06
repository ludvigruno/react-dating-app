import { combineReducers } from 'redux';
import login from '../../containers/Login/reducer';
import register from '../../containers/Register/reducer';
import userProfile from '../../containers/UserProfile/reducer';
import userList from '../../containers/UserList/reducer';
import account from './shared/account';

const rootReducer = combineReducers({
  account,
  register,
  userProfile,
  login,
  userList,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
