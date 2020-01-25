import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = props => {
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
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
