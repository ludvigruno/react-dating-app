import types from '../../../core/actionTypes/index';
import {
  IFetchUserProfilePayload,
  IFetchUserSuccessPayload,
} from '../interfaces';

export const clearUserProfile = () => ({
  type: types.CLEAR_USER_PROFILE,
});

export const fetchUserProfileRequest = (payload: IFetchUserProfilePayload) => ({
  type: types.FETCH_USER_PROFILE_REQUEST,
  payload,
});

export const fetchUserProfileSuccess = (payload: IFetchUserSuccessPayload) => ({
  type: types.FETCH_USER_PROFILE_SUCCESS,
  payload,
});

export const fetchUserProfileFailure = (payload: any) => ({
  type: types.FETCH_USER_PROFILE_FAILURE,
  payload,
});
