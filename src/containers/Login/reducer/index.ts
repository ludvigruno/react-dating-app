import types from '../../../core/actionTypes';
import { ILoginState, LoginActions } from '../interfaces';

const initialState: ILoginState = {};

export default (
  state: ILoginState = initialState,
  action: LoginActions,
): ILoginState => {
  const { type } = action;
  switch (type) {
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};
