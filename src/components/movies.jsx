import React, { Component } from "react";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    pageSize: 4
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
        <MoviesTable
          filteredMovies={filteredMovies}
          handleDelete={this.props.handleDelete}
          handleLike={this.props.handleLike}
        />
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
