import { Home } from '../components/pages/Home';
import { Page404 } from '../components/pages/Page404';
import { Setting } from '../components/pages/Setting';
import { UserManagement } from '../components/pages/UserManagement';
import { ReactElement } from 'react';

type homeRoutesType = {
  path: string,
  exact: boolean,
  children: ReactElement
}

export const homeRoutes: Array<homeRoutesType> = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user-management",
    exact: false,
    children: <UserManagement />
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
]
