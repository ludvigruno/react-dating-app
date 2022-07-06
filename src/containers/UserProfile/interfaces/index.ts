import { IDefaultAction } from '../../../core/intefaces';

export interface IUserProfileState {
  user: IUserProfile | null;
}

export interface IUserProfile {
  name: string;
  surname: string;
  userName: string;
  phone: string;
}

export interface IFetchUserProfilePayload {
  userId: string;
}

export interface UserProfilePayload {
  user: IUserProfile | null;
}

export interface IFetchUserSuccessPayload extends UserProfilePayload {
  user: IUserProfile | null;
}

export interface IFetchUserProfileAction
  extends IDefaultAction<string, IFetchUserProfilePayload> {}

export interface IFetchUserProfileSuccessAction
  extends IDefaultAction<string, IFetchUserSuccessPayload> {}

export type UserProfileActions = IFetchUserProfileSuccessAction;
