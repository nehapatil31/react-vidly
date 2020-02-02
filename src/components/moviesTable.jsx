import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./common/like";
import Table from "./common/table";

class MoviesTable extends Component {
  headerColumns = [
    {
      path: "title",
      label: "Title",
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: movie => (
        <Like
          liked={movie.liked}
          onClick={() => {
            this.props.handleLike(movie);
          }}
        />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          className="btn btn-danger"
          onClick={() => {
            this.props.handleDelete(movie);
          }}
        >
          Delete
        </button>
      )
    }
  ];
  render() {
    return (
      <Table
        headerColumns={this.headerColumns}
        onSort={this.props.onSort}
        sortOrder={this.props.sortOrder}
        data={this.props.movies}
      />
    );
  }
}

export default MoviesTable;
