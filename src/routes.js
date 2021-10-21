import React, {Fragment, lazy, Suspense} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import LoadingScreen from './Components/General/LoadingScreen';
import AuthGuard from './Components/General/AuthGuard';
import GuestGuard from './Components/General/GuestGuard';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                <Layout>
                  {route.routes
                    ? renderRoutes(route.routes)
                    : <Component {...props} />}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  {
    exact: true,
    path: '/404',
    component: lazy(() => import('./views/errors/NotFoundView'))
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/',
    component: lazy(() => import('./views/auth/LoginView'))
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/login',
    component: lazy(() => import('./views/auth/LoginView'))
  },

  {
    path: '/app',
    guard: AuthGuard,
    routes: [
      {
        exact: true,
        path: '/app/account',
        // component: lazy(() => import('src/views/user/UserAddView'))
      },


      {
        component: () => <Redirect to="/404" />
      }
    ]
  },

//   {
//     path: '/ATN/atr2',
//     guard: null,
//     routes: [
//       {
//         // exact: true,
//         path: '/ATN/atr2/zone',
//         component: lazy(() => import('src/views/irisa/atr/zone/index'))
//       },
//       {
//         //exact: true,
//         path: '/ATN/atr2/application',
//         component: lazy(() => import('src/views/irisa/atr/application/index'))
//       },
//       {
//         //exact: true,
//         path: '/ATN/atr2/role',
//         component: lazy(() => import('src/views/irisa/atr/role/index'))
//       },
//       {
//         //exact: true,
//         path: '/ATN/atr2/menu',
//         component: lazy(() => import('src/views/irisa/atr/menu/index'))
//       },
//       {
//         //exact: true,
//         path: '/ATN/atr2/user',
//         component: lazy(() => import('src/views/irisa/atr/user/index'))
//       },
//       {
//         //exact: true,
//         path: '/ATN/atr2/test',
//         component: lazy(() => import('src/views/irisa/atr/test/index'))
//       },
//       {
//         //exact: true,
//         path: '/ATN/atr2/setting',
//         component: lazy(() => import('src/views/irisa/atr/setting/index'))
//       },
//       {
//         component: () => <Redirect to="/404" />
//       }
//     ]
//   },

//   {
//     path: '/ATN/bi',
//     guard: null,
//     routes: [
//       {
//         exact: true,
//         path: '/ATN/bi/approle',
//         component: lazy(() => import('src/views/irisa/bi/approle/index'))
//       },

//       {
//         component: () => <Redirect to="/404" />
//       }
//     ]
//   },

];

export default routes;
