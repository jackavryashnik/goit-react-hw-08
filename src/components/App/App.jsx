import './App.css';
import NotFoundPage from '../../pages/NotFoundPage';
import Layout from '../Layout/Layout';
import PrivateRout from '../PrivateRoute/PrivateRoute';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../../redux/auth/operations';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('../../pages/HomePage'));
const Login = lazy(() => import('../../pages/Login'));
const Registration = lazy(() => import('../../pages/Registration'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={<PrivateRout component={<ContactsPage />} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<Login />} />}
            />
            <Route
              path="/register"
              element={<RestrictedRoute component={<Registration />} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
