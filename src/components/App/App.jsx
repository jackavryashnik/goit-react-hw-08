import './App.css';
import NotFoundPage from '../../pages/NotFoundPage';
import Layout from '../Layout/Layout';
import PrivateRout from '../PrivateRoute/PrivateRoute';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../../redux/auth/operations';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { selectIsRefreshing } from '../../redux/auth/selectors';

const HomePage = lazy(() => import('../../pages/HomePage'));
const Login = lazy(() => import('../../pages/Login'));
const Registration = lazy(() => import('../../pages/Registration'));
const Contacts = lazy(() => import('../../pages/Contacts'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Layout>
        {
        isRefreshing ?
        <p>Loading...</p> :
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={<PrivateRout redirectTo="/login" component={<Contacts />} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />}
            />
            <Route
              path="/register"
              element={<RestrictedRoute redirectTo="/contacts" component={<Registration />} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        }
      </Layout>
    </>
  );
}

export default App;
