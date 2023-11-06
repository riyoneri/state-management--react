import classes from "./Header.module.css";

import { authActions } from "../store/auth-slice";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          {isAuthenticated && (
            <li onClick={() => dispatch(authActions.logout())}>
              <button>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
