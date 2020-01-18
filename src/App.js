import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import GenreList from "./components/genreList";
import { getMovies } from "./services/fakeMovieService";

class App extends Component {
  state = {
    movies: getMovies(),
    activeGenre: "all"
  };
  handleGenre = genre => {
    //Set active genre
    this.setState({ activeGenre: genre._id });

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
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-3">
            <GenreList
              handleGenre={this.handleGenre}
              activeGenre={this.state.activeGenre}
            />
          </div>
          <div className="col">
            <Movies movies={this.state.movies} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
