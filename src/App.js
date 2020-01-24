import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/common/navBar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";

class App extends Component {
    state = {};

    render() {
        return (
            <div>
                <NavBar />
                <Switch>
                    <Route path="/movies" component={Movies} />
                    <Route path="/customers" component={Customers} />
                    <Route path="/rentals" component={Rentals} />
                    <Route path="/" component={Movies} />
                </Switch>
            </div>
        );
    }
}

export default App;
