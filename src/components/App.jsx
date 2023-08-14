import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthentificated,
  selectToken,
  selectUserError,
  selectUserLoading,
} from 'redux/auth/authSlice';
import { refreshUserThunk } from 'redux/auth/authOperations';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { selectIsLoading } from 'redux/contacts/contactsSelectors';
import Loader from './Loader/Loader';
import { Notify } from 'notiflix';

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated);
  const isLoadingContacts = useSelector(selectIsLoading);
  const isLoadingAuth = useSelector(selectUserLoading);
  const loading = isLoadingContacts || isLoadingAuth;
  const errorAuth = useSelector(selectUserError);

  useEffect(() => {
    if (!token || authentificated) return;

    dispatch(refreshUserThunk());
  }, [token, dispatch, authentificated]);

  useEffect(() => {
    if (!errorAuth) return;
    Notify.failure(errorAuth);
  }, [errorAuth]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      {loading && <Loader />}
    </div>
  );
};
