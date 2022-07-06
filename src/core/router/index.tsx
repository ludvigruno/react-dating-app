import React, { memo, useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import App from '../../App';
import NotFoundPage from '../../containers/404Page';
import UserList from '../../containers/UserList';

import Login from '../../containers/Login';
import Register from '../../containers/Register';
import UserDashboard from '../../containers/UserDashboard';
import UserProfile from '../../containers/UserProfile';
import { APP_ROUTES } from '../appRoutes';

import {
  UserGuard,
  RegisteredUsersGuard,
  UnregisteredUsersGuard,
} from '../guards';
import GuestLayout from '../layouts/guest';
import LoggedInUserLayout from '../layouts/logged-in-user';

// interface IRouterProps {}

const Router = memo(() => {
  const [Layout, setLayout] = useState<any>(GuestLayout);
  const [Dashboard, setDashboard] = useState<any>(<UserDashboard />);
  const [LoggedLayout, setLoggedLayout] = useState<any>(LoggedInUserLayout);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === APP_ROUTES.MAIN) {
      setLayout(GuestLayout);
    }
    setLoggedLayout(LoggedInUserLayout);
    setDashboard(<UserDashboard />);
  }, [location.pathname, GuestLayout]);
  return (
    <Routes>
      <Route
        path={APP_ROUTES.MAIN}
        element={
          <RegisteredUsersGuard>
            <GuestLayout>
              <App />
            </GuestLayout>
          </RegisteredUsersGuard>
        }
      />
      <Route
        path={APP_ROUTES.REGISTER}
        element={
          <RegisteredUsersGuard>
            <GuestLayout>
              <Register />
            </GuestLayout>
          </RegisteredUsersGuard>
        }
      />
      <Route
        path={APP_ROUTES.LOGIN}
        element={
          <RegisteredUsersGuard>
            <Layout>
              <Login />
            </Layout>
          </RegisteredUsersGuard>
        }
      />
      <Route
        path='*'
        element={
          <Layout>
            <NotFoundPage />
          </Layout>
        }
      />
      <Route element={<LoggedLayout />}>
        <Route
          path={APP_ROUTES.MAIN}
          element={<UnregisteredUsersGuard>{Dashboard}</UnregisteredUsersGuard>}
        />
        <Route
          path={APP_ROUTES.PROFILE_USER}
          element={
            <UserGuard>
              <UserProfile />
            </UserGuard>
          }
        />
        <Route
          path={APP_ROUTES.USERS}
          element={
            <UserGuard>
              <UserList />
            </UserGuard>
          }
        />
        <Route
          path={APP_ROUTES.DASHBOARD}
          element={
            <UserGuard>
              <UserDashboard />
            </UserGuard>
          }
        />
        <Route
          path={APP_ROUTES.USERLIST}
          element={
            <UserGuard>
              <UserList />
            </UserGuard>
          }
        />
      </Route>
    </Routes>
  );
});

export default Router;
