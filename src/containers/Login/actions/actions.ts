import { IFetchLoginRequest, IFetchLoginSuccess, ILogin } from '../interfaces';
import types from '../../../core/actionTypes/index';

export const fetchLoginRequest = (payload: ILogin): IFetchLoginRequest => ({
  type: types.LOGIN_USER_REQUEST,
  payload,
});

export const fetchLoginSuccess = (): IFetchLoginSuccess => ({
  type: types.LOGIN_USER_SUCCESS,
  payload: {},
});

export const fetchLoginFailure = (payload: any): IFetchLoginSuccess => ({
  type: types.LOGIN_USER_FAILURE,
  payload,
});
