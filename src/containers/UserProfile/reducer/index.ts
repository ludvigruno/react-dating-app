import types from '../../../core/actionTypes';
import { UserProfileActions, IUserProfileState } from '../interfaces';

const initialState: IUserProfileState = {
  user: null,
};

export default (
  state: IUserProfileState = initialState,
  action: UserProfileActions,
): IUserProfileState => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        ...(payload || null),
      };
    case types.CLEAR_USER_PROFILE:
      return initialState;
    default:
      return {
        ...state,
      };
  }
};
