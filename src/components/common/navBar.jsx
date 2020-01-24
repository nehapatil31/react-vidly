import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                Vidly
            </a>

            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/movies">
                            Movies
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/customers">
                            Customers
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/rentals">
                            Rentals
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
