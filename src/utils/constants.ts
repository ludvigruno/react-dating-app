export enum UserStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  CUSTOMER_PAID = 'CUSTOMER_PAID',
  PAID = 'PAID',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED',
  DISPUTE = 'DISPUTE',
}

export enum UserStatusColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  WARNING = 'warning',
  INFO = 'info',
  ERROR = 'error',
}

export const userStatusColor = {
  IN_PROGRESS: UserStatusColor.PRIMARY,
  CUSTOMER_PAID: UserStatusColor.INFO,
  PAID: UserStatusColor.SECONDARY,
  COMPLETED: UserStatusColor.SUCCESS,
  CANCELED: UserStatusColor.WARNING,
  DISPUTE: UserStatusColor.ERROR,
};

export const ErrorMessages: any = {
  register: {
    USER_EXIST: 'errors:register.USER_EXIST',
  },
  login: {
    USER_NOT_EXIST: 'errors:login.USER_NOT_EXIST',
    PASSWORD_ERROR: 'errors:login.PASSWORD_ERROR',
  },
};

export enum OrderBy {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum OrderName {
  CREATED_AT = 'createdAt',
  NAME = 'name',
  DESCRIPTION = 'description',
}

export const defaultSort = {
  createdAt: {
    orderBy: OrderBy.DESC,
    orderName: OrderName.CREATED_AT,
  },
  name: {
    orderBy: OrderBy.DESC,
    orderName: OrderName.NAME,
  },
  description: {
    orderBy: OrderBy.DESC,
    orderName: OrderName.DESCRIPTION,
  },
};

export enum ButtonVariant {
  contained = 'contained',
  outlined = 'outlined',
  text = 'text',
}
