import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import NavBar from "./components/common/navBar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import MovieForm from "./components/movieForm";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "./App.css";

class App extends Component {
    state = {};

    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <Switch>
                        <Route path="/login" component={LoginForm} />
                        <Route path="/register" component={RegisterForm} />
                        <Route path="/movies/new" component={MovieForm} />
                        <Route path="/movies/:movieId" component={MovieForm} />
                        <Route path="/movies" component={Movies} />
                        <Route path="/customers" component={Customers} />
                        <Route path="/rentals" component={Rentals} />
                        <Route path="/not-found" component={NotFound} />
                        <Redirect from="/" exact to="/movies" />
                        <Redirect to="/not-found" />
                    </Switch>
                </div>
                {/* <iframe
          allow="microphone;"
          width="300"
          height="400"
          src="https://console.dialogflow.com/api-client/demo/embedded/bdd090af-dfe9-402d-b41b-98894ae9eb67"
        ></iframe> */}
            </div>
        );
    }
}

export default App;
