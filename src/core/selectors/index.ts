import { createSelector } from 'reselect';
import { AppState } from '../reducers';
// import { TypeUser } from '../../utils/constants';

export const getState = (state: AppState) => state;

export const getCurrentUserSelector = (state: AppState) =>
  state.account.currentUser;

export const isCurrentUserSelector = createSelector(
  getCurrentUserSelector,
  (currentUser: any) => currentUser,
);
