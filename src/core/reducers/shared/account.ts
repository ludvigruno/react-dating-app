import types from '../../actionTypes';
import { IAny, ICurrentUser, IDefaultAction } from '../../intefaces';

interface IAccountState {
  currentUser: ICurrentUser | null;
}

const initialState: IAccountState = {
  currentUser: null,
};
const accountReducer = (
  state: IAccountState = initialState,
  action: IDefaultAction<string, IAny>,
): IAccountState => {
  const { type, payload } = action;
  switch (type) {
    case types.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload?.currentUser,
      };
    case types.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default accountReducer;
