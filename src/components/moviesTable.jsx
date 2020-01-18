import React, { Component } from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";

class MoviesTable extends Component {
  headerColumns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "like" },
    { key: "delete" }
  ];
  render() {
    return (
      <table className="table">
        <thead>
          <TableHeader
            headerColumns={this.headerColumns}
            onSort={this.props.onSort}
            sortOrder={this.props.sortOrder}
          />
        </thead>
        <tbody>
          {this.props.filteredMovies.map(movie => {
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
                      this.props.handleLike(movie);
                    }}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      this.props.handleDelete(movie);
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
    );
  }
}

export default MoviesTable;
