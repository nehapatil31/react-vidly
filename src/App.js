import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Movies from "./components/movies";
import GenreList from "./components/genreList";
import { getMovies } from "./services/fakeMovieService";
import NavBar from "./components/common/navBar";
import Customers from "./components/customers";

class App extends Component {
  state = {
    movies: getMovies(),
    activeGenre: "all",
    currentPage: 1,
    sortOrder: {}
  };

  handleDelete = movie => {
    let moviesList = this.state.movies;
    moviesList = moviesList.filter(item => item._id !== movie._id);
    this.setState({ movies: moviesList });
  };

  handleLike = movie => {
    let movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleGenre = genre => {
    //Set active genre
    this.setState({ activeGenre: genre._id });
    this.setState({ currentPage: 1 });

    const movies = getMovies();
    if (genre === "all") {
      this.setState({ activeGenre: "all" });
      return this.setState({ movies });
    }
    const filteredMovies = movies.filter(movie => {
      return movie.genre._id === genre._id;
    });
    this.setState({ movies: filteredMovies });
  };
  handlePagination = page => {
    this.setState({ currentPage: page });
  };
  onSort = sortOrder => {
    this.setState({ sortOrder });
  };
  render() {
    return (
      <div>
        <NavBar />
        <div className="row">
          <div className="col-3">
            <GenreList
              handleGenre={this.handleGenre}
              activeGenre={this.state.activeGenre}
            />
          </div>
          <div className="col">
            <Switch>
              <Route
                path="/movies"
                render={props => (
                  <Movies
                    movies={this.state.movies}
                    currentPage={this.state.currentPage}
                    handlePagination={this.handlePagination}
                    handleDelete={this.handleDelete}
                    handleLike={this.handleLike}
                    onSort={this.onSort}
                    sortOrder={this.state.sortOrder}
                    {...props}
                  />
                )}
              />
              <Route path="/customers" component={Customers} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
