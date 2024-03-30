import './App.css';
import NotFoundPage from '../../pages/NotFoundPage';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import Layout from '../Layout/Layout';
import PrivateRout from '../PrivateRoute/PrivateRoute';
import RestrictedRout from '../RestrictedRout/RestrictedRout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('../../pages/HomePage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
const RegisterForm = lazy(() => import('../../pages/Registration'));
const LoginForm = lazy(() => import('../../pages/Login'));

function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchContacts());
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>User is refreshing, please wait...</b>
  ) : (
    <>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <h1>Phonebook</h1>
          <ContactForm />
          <SearchBox>Find contacts by name</SearchBox>
          {loading && !error && <p>Loading...</p>}
          {error && <p>Oops something went wrong. Try reloading</p>}
          <ContactList />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={<PrivateRout component={<ContactsPage />} />}
            />
            <Route
              path="/login"
              element={<RestrictedRout comoinent={<LoginForm />} />}
            />
            <Route
              path="/register"
              element={<RestrictedRout comoinent={<RegisterForm />} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
