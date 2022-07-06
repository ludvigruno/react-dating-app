import login from '../../containers/Login/actions/actionTypes';
import register from '../../containers/Register/actions/actionTypes';
import userProfile from '../../containers/UserProfile/actions/actionTypes';
import core from '../actions/actionTypes';
import userList from '../../containers/UserList/actions/actionTypes';

interface IRootActionTypes {
  [key: string]: string;
}

const rootActionTypes: IRootActionTypes = {
  ...core,
  ...register,
  ...userList,
  ...userProfile,
  ...login,
};

export default rootActionTypes;
