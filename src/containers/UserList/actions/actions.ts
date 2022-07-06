import types from '../../../core/actionTypes';
import {
  IUserListSuccessPayload,
  IGetUserList,
  IGetUserListSuccess,
} from '../interfaces';

export const getUserList = (payload: any): IGetUserList => ({
  type: types.GET_USER_LIST_REQUEST,
  payload,
});

export const getUserListSuccess = (
  payload: IUserListSuccessPayload,
): IGetUserListSuccess => ({
  type: types.GET_USER_LIST_SUCCESS,
  payload,
});

export const getUserListFailure = (payload: any): IGetUserListSuccess => ({
  type: types.GET_USER_LIST_FAILURE,
  payload,
});

export const clearUserList = () => ({
  type: types.CLEAR_USER_LIST,
});
