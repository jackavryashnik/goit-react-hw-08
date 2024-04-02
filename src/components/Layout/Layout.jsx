import { useSelector } from 'react-redux';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import AppBar from '../AppBar/AppBar';

const Layout = ({ children }) => {
  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? (
    <b>User is refreshing, please wait...</b>
  ) : (
    <>
      <AppBar />
      {children}
    </>
  );
};

export default Layout;
