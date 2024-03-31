import { Link } from "react-router-dom";

const AuthNav = () => {
  return <ul>
    <li><Link to='/register'>Signin</Link></li>
    <li><Link to='/login'>Login</Link></li>
  </ul>;
};

export default AuthNav;
