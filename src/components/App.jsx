import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@fontsource/roboto';

export const theme = createTheme({
  typography: {},
  palette: {
    primary: {
      light: '#FFF7E8',
      main: '#1c4931 ',
      dark: '#d85841',
      contrastText: '#fff',
    },
    secondary: {
      light: '#9EADBB',
      main: '#FFF7E8',
      dark: '#d85841',
      contrastText: '#d85841',
    },
    spacing: [0, 4, 8, 16, 32, 64],
  },
});

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const PhonebookPage = lazy(() => import('../pages/Phonebook'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<PhonebookPage />} />
            }
          />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
