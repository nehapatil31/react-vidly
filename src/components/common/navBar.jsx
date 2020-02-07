import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Vidly
      </Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <NavLink
            className="nav-item nav-link"
            activeClassName="active"
            to="/movies"
          >
            Movies
          </NavLink>

          <NavLink
            className="nav-item nav-link"
            activeClassName="active"
            to="/customers"
          >
            Customers
          </NavLink>

          <NavLink
            className="nav-item nav-link"
            activeClassName="active"
            to="/rentals"
          >
            Rentals
          </NavLink>

          {!user && (
            <React.Fragment>
              <NavLink
                className="nav-item nav-link"
                activeClassName="active"
                to="/login"
              >
                Login
              </NavLink>

              <NavLink
                className="nav-item nav-link"
                activeClassName="active"
                to="/register"
              >
                Register
              </NavLink>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <NavLink
                className="nav-item nav-link"
                activeClassName="active"
                to="/profile"
              >
                {user.name}
              </NavLink>

              <NavLink
                className="nav-item nav-link"
                activeClassName="active"
                to="/logout"
              >
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
