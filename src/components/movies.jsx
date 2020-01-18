import React, { Component } from "react";
import Like from "./common/like";
//import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    pageSize: 4
  };

  handleDelete = movie => {
    let moviesList = this.props.movies;
    moviesList = moviesList.filter(item => item._id !== movie._id);
    this.setState({ movies: moviesList });
  };
  handleLike = movie => {
    let movies = [...this.props.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  render() {
    const { length: count } = this.props.movies;
    const { movies, currentPage } = this.props;
    const { pageSize } = this.state;

    if (count === 0) return <span>There are no movies in the database.</span>;

    const filteredMovies = paginate(movies, currentPage, pageSize);
    return (
      <div>
        <div>Showing {count} movies in datatable</div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {filteredMovies.map(movie => {
              return (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => {
                        this.handleLike(movie);
                      }}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.handleDelete(movie);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          itemsCount={movies.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onClick={this.props.handlePagination}
        />
      </div>
    );
  }
}

export default Movies;
