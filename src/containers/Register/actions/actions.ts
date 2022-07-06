import {
  IFetchRegisterRequest,
  IFetchRegisterSuccess,
  RegisterPayload,
} from '../interfaces';
import types from '../../../core/actionTypes/index';

export const fetchRegisterRequest = (
  payload: RegisterPayload,
): IFetchRegisterRequest => ({
  type: types.FETCH_REGISTER_USER_REQUEST,
  payload,
});

export const fetchRegisterSuccess = (): IFetchRegisterSuccess => ({
  type: types.FETCH_REGISTER_USER_SUCCESS,
  payload: {},
});

export const fetchRegisterFailure = (payload: any): IFetchRegisterSuccess => ({
  type: types.FETCH_REGISTER_USER_FAILURE,
  payload,
});
