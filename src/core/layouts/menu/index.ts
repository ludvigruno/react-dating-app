import { APP_ROUTES } from '../../appRoutes';

export const pages = ['Profile', 'Users'];
export const userNavBar = [
  {
    name: 'menu:userNavBar.users',
    route: APP_ROUTES.USERS,
  },
  {
    name: 'menu:userNavBar.userlist',
    route: APP_ROUTES.USERLIST,
  },
];
export const baseSettings = [
  {
    name: 'menu:baseSettings.dashboard',
    route: APP_ROUTES.DASHBOARD,
  },
  {
    name: 'menu:baseSettings.logout',
    route: APP_ROUTES.LOGIN,
  },
];
export const userSettings = [
  {
    name: 'menu:userSettings.profile',
    route: APP_ROUTES.PROFILE_USER,
  },
  ...baseSettings,
];
