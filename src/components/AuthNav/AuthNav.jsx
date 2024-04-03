import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return <ul>
    <li><NavLink to='/register'>Signin</NavLink></li>
    <li><NavLink to='/login'>Login</NavLink></li>
  </ul>;
};

export default AuthNav;
