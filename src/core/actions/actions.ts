import { ICurrentUserPayload } from '../intefaces';
import types from '../actionTypes';

export const setUserLogout = () => ({
  type: 'LOGOUT_USER_REQUEST',
});

export const setCurrentUser = (payload: ICurrentUserPayload) => ({
  type: 'SET_CURRENT_USER',
  payload,
});

export const getCurrentUser = () => ({
  type: types.GET_CURRENT_USER_REQUEST,
});

export const getUserById = () => ({
  type: types.FETCH_USER_PROFILE_REQUEST,
});
