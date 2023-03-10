import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

import "./Header.css";

const Header = () => {
  // distructcharing
  const { user, logOut } = useAuth();
  return (
    <div>
      <div className="nav-link">
        <li>
          <NavLink className="link" to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/shipping">
            Shipping
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/register">
            Register
          </NavLink>
        </li>
        {user?.email && <button onClick={logOut}>Log Out</button>}
      </div>
    </div>
  );
};

export default Header;
