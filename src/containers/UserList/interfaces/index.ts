import { IDefaultAction } from '../../../core/intefaces';
import { UserStatus } from '../../../utils/constants';

export interface IUserListRequest {
  data: IUserListItem[] | [];
}

export interface IUsersState {
  users: UserListItemProps[];
}

export interface IUserListItem {
  id: string;
  name: UserStatus;
  surname: string;
  username: string;
  email: string;
  avatar: string;
  age: string;
}

export interface UserListItemProps {
  user: IUserListItem;
}

export interface IUserListSuccessPayload {
  users: UserListItemProps[];
}

export interface IGetUserList extends IDefaultAction<string, {}> {}
export interface IGetUserListSuccess
  extends IDefaultAction<string, IUserListSuccessPayload> {}
