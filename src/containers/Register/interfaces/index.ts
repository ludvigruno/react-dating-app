import { IDefaultAction } from '../../../core/intefaces';

export interface IUser {
  id: string;
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  avatar: string;
  age: string;
}

export interface IRegisterState {}

export interface RegisterPayload {
  user: IUser;
}

export interface IFetchRegisterRequest
  extends IDefaultAction<string, RegisterPayload> {}
export interface IFetchRegisterSuccess extends IDefaultAction<string, {}> {}

export type RegisterActions = IFetchRegisterRequest | IFetchRegisterSuccess;
