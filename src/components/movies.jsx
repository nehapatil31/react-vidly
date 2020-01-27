import React, { Component } from "react";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import GenreList from "./genreList";
import { getMovies } from "../services/fakeMovieService";
import _ from "lodash";

class Movies extends Component {
    state = {
        pageSize: 4,
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
        const { length: count } = this.state.movies;
        const { movies, currentPage, sortOrder } = this.state;
        const { pageSize } = this.state;

        if (count === 0)
            return <span>There are no movies in the database.</span>;

        const sortedMovies = _.orderBy(
            movies,
            [sortOrder.path],
            [sortOrder.order]
        );

        const filteredMovies = paginate(sortedMovies, currentPage, pageSize);
        return (
            <div className="row">
                <div className="col-3">
                    <GenreList
                        handleGenre={this.handleGenre}
                        activeGenre={this.state.activeGenre}
                    />
                </div>
                <div className="col">
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            this.props.history.push("/movies/new");
                        }}
                    >
                        New Movie
                    </button>
                    <div>Showing {count} movies in datatable</div>
                    <MoviesTable
                        filteredMovies={filteredMovies}
                        handleDelete={this.handleDelete}
                        handleLike={this.handleLike}
                        onSort={this.onSort}
                        sortOrder={sortOrder}
                    />
                    <Pagination
                        itemsCount={movies.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onClick={this.handlePagination}
                    />
                </div>
            </div>
        );
    }
}

export default Movies;
