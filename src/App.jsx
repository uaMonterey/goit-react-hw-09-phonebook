import React, { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';

//components
import routes from './routes';
import AppBar from './Components/AppBar';
import Container from './Components/Container/Container';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

import { getCurrentUser } from './redux/auth/auth-operations';
import { getIsAuthenticated } from './redux/auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const HomeView = lazy(() =>
  import('./view/HomeView/HomeView.js' /*webpackChunkName: "home-view" */),
);
const RegisterView = lazy(() =>
  import(
    './view/RegisterView/RegisterView.js' /*webpackChunkName: "register-view" */
  ),
);
const LoginView = lazy(() =>
  import('./view/LoginView/LoginView.js' /*webpackChunkName: "login-view" */),
);
const ContactsView = lazy(() =>
  import(
    './view/ContactsView/ContactsView.js' /*webpackChunkName: "contacts-view" */
  ),
);

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuthenticated);
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch, isAuth]);

  return (
    <Container title="Phonebook">
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PublicRoute exact path={routes.home} component={HomeView} />
          <PublicRoute
            path={routes.register}
            restricted
            component={RegisterView}
            redirectTo={routes.contacts}
          />
          <PublicRoute
            path={routes.login}
            restricted
            component={LoginView}
            redirectTo={routes.contacts}
          />
          <PrivateRoute
            path={routes.contacts}
            component={ContactsView}
            redirectTo={routes.login}
          />
        </Switch>
      </Suspense>
    </Container>
  );
};
export default App;
