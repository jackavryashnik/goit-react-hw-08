import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';

const UserMenu = () => {
  const { name } = useSelector(selectUser);
  return (
    <div>
      <p>Welcome, {name || 'User'}</p>
      <button>Logout</button>
    </div>
  );
};

export default UserMenu;
