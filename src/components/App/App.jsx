import { fetchContacts } from 'redux/сontact/operations';
import { NavLink, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { logout, refresh } from 'redux/auth/authOperations';
import { selectaUthentificated, selectToken } from 'redux/auth/authReduser';
import { UserMenu } from '../userMenu/userMenu';
import PrivateRote from '../PrivateRoute/PrivateRote';
import css from './app.module.css'

const HomePage = lazy(() => import('pages/Home'));
const ContactsPage = lazy(() => import('pages/Contacts'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const token = useSelector(selectToken);
  const authentificated = useSelector(selectaUthentificated);
  useEffect(() => {
    if (!token || authentificated) {
      return;
    }
    dispatch(refresh());
  }, [token, dispatch, authentificated]);

  return (
    <div className={css.body}>
      <header>
        <nav className={css.nav}>
          <NavLink className={css.headLink} to="/">
            Home
          </NavLink>
          {authentificated ? (
            <>
              <NavLink className={css.headLink} to="/contacts">
                Contacts
              </NavLink>
              <UserMenu />
              <button
                className={css.headLink}
                onClick={() => dispatch(logout())}
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <NavLink className={css.headLink} to="/register">
                Register
              </NavLink>
              <NavLink className={css.headLink} to="/login">
                Login
              </NavLink>
            </>
          )}
        </nav>
      </header>
      <main>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route
              path="/contacts"
              element={
                <PrivateRote redirecTo="/login">
                  <ContactsPage />
                </PrivateRote>
              }
            />

            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
