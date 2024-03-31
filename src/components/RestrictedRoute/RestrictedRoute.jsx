import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ component: Component }) => {
  const isLogeIn = useSelector(selectIsLoggedIn);

  return isLogeIn ? <Navigate to="/contacts" /> : Component;
};

export default RestrictedRoute;
