import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
  const isLogeIn = useSelector(selectIsLoggedIn);

  return isLogeIn ? Component : <Navigate to="/" />;
};

export default PrivateRoute;
