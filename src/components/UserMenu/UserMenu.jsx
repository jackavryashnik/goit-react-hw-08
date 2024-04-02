import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(logout());
  }

  return (
    <div>
      <p>Welcome, {name || 'User'}</p>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default UserMenu;
