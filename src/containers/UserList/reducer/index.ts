import types from '../../../core/actionTypes';
import { IUsersState, IGetUserListSuccess } from '../interfaces';

const initialState: IUsersState = {
  users: [],
};

export default (
  state: IUsersState = initialState,
  action: IGetUserListSuccess,
): IUsersState => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_USER_LIST_SUCCESS:
      return {
        ...state,
        ...(payload || null),
      };
    case types.CLEAR_USER_LIST:
      return {
        ...initialState,
      };
    default:
      return { ...state };
  }
};
