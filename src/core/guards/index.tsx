import React, { memo, FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getCurrentUserSelector } from '../selectors';
import { APP_ROUTES } from '../appRoutes';
import { IGuard } from './interfaces';

export const UnregisteredUsersGuard: FC<IGuard> = memo(
  ({ children, redirectTo = APP_ROUTES.LOGIN }: IGuard) => {
    const currentUser = useSelector(getCurrentUserSelector);
    return currentUser ? children : <Navigate to={redirectTo} />;
  },
);

export const UserGuard: FC<IGuard> = memo(
  ({ children, redirectTo = APP_ROUTES.DASHBOARD }: IGuard) => {
    const currentUser = useSelector(getCurrentUserSelector);
    return currentUser ? children : <Navigate to={redirectTo} />;
  },
);

export const RegisteredUsersGuard: FC<IGuard> = memo(
  ({ children, redirectTo = APP_ROUTES.DASHBOARD }: IGuard) => {
    const currentUser = useSelector(getCurrentUserSelector);
    return !currentUser ? children : <Navigate to={redirectTo} />;
  },
);
