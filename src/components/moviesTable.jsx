import React, { Component } from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

class MoviesTable extends Component {
  headerColumns = [
    { path: "title", label: "Title" },
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
      <table className="table">
        <TableHeader
          headerColumns={this.headerColumns}
          onSort={this.props.onSort}
          sortOrder={this.props.sortOrder}
        />
        <TableBody
          data={this.props.filteredMovies}
          columns={this.headerColumns}
        />
      </table>
    );
  }
}

export default MoviesTable;
