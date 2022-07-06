import { IDefaultAction } from '../../../core/intefaces';

export interface ILogin {
  email: string;
  password: string;
  error?: null;
}

export interface ILoginState {}

export type FetchLoginActionType = {
  payload: {
    clientAccountId: string;
  };
};

export type LoginPayload = {};

export type ErrorPayload = {
  error: string | string[];
};

export type RequestPayload = {
  [key: string]: any;
};

export interface IFetchLoginRequest extends IDefaultAction<string, ILogin> {}
export interface IFetchLoginSuccess extends IDefaultAction<string, {}> {}

export type LoginActions = IFetchLoginRequest | IFetchLoginSuccess;
