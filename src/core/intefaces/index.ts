import { UserStatus, OrderBy } from '../../utils/constants';

export interface IDispatchPromise {
  resolve: (param?: any) => void;
  reject: (param?: any) => void;
}

export interface IDefaultPromiseAction<T, P> extends IDispatchPromise {
  type: T;
  payload: P;
}

export interface IDefaultAction<T, P> {
  type: T;
  payload: P;
}

export interface IAny {
  [key: string]: any;
}

export interface ICurrentUserPayload {
  currentUser: null | undefined | IAny;
}

export interface IUserPayload {
  id: string;
  name: string;
  surname: string;
  username: string;
  email: string;
  avatar: string;
  age: string;
}

export interface ICurrentUser {
  email: string;
  id: string;
  name: string;
  avatar: string;
}
