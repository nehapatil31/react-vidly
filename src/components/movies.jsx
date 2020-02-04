import React, { Component } from "react";
import { toast } from "react-toastify";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import GenreList from "./genreList";
import { getMovies, deleteMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";
import _ from "lodash";

class Movies extends Component {
  state = {
    pageSize: 4,
    movies: [],
    genres: [],
    searchQuery: "",
    activeGenre: null,
    currentPage: 1,
    sortOrder: {}
  };

  async componentDidMount() {
    const { data: movies } = await getMovies();
    const { data: genresList } = await getGenres();
    const genres = [{ _id: "", name: "All Genres" }, ...genresList];

    this.setState({ movies, genres });
  }
  handleDelete = async movie => {
    const moviesList = this.state.movies;
    const movies = moviesList.filter(item => item._id !== movie._id);
    this.setState({ movies });

    try {
      await deleteMovie(movie._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This movie has already been deleted.");

      this.setState({ movies: moviesList });
    }
  };

  handleLike = movie => {
    let movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleGenre = genre => {
    this.setState({ activeGenre: genre, currentPage: 1, searchQuery: "" });
  };
  handlePagination = page => {
    this.setState({ currentPage: page });
  };
  onSort = sortOrder => {
    this.setState({ sortOrder });
  };
  handleSearch = ({ target: input }) => {
    this.setState({
      activeGenre: null,
      currentPage: 1,
      searchQuery: input.value
    });
  };
  getPagedData = () => {
    const {
      movies,
      sortOrder,
      currentPage,
      pageSize,
      searchQuery,
      activeGenre
    } = this.state;

    let filtered = movies;

    if (searchQuery) {
      filtered = movies.filter(movie =>
        movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (activeGenre && activeGenre._id) {
      filtered = movies.filter(m => m.genre._id === activeGenre._id);
    }

    const sortedMovies = _.orderBy(
      filtered,
      [sortOrder.path],
      [sortOrder.order]
    );

    const paginatedMovies = paginate(sortedMovies, currentPage, pageSize);
    return {
      data: paginatedMovies,
      totalCount: filtered.length
    };
  };

  render() {
    const { length: count } = this.state.movies;
    const { currentPage, sortOrder } = this.state;
    const { pageSize } = this.state;

    if (count === 0) return <span>There are no movies in the database.</span>;

    const { totalCount, data: movies } = this.getPagedData();
    return (
      <div className="row">
        <div className="col-3">
          <GenreList
            handleGenre={this.handleGenre}
            activeGenre={this.state.activeGenre}
            genres={this.state.genres}
          />
        </div>
        <div className="col">
          <button
            className="btn btn-primary"
            onClick={() => {
              this.props.history.push("/movies/new");
              this.props.history.push({
                pathname: "/movies/new",
                state: { new: true }
              });
            }}
          >
            New Movie
          </button>
          <input
            className="my-2 form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={this.handleSearch}
            value={this.state.searchQuery}
          ></input>

          <div>Showing {totalCount} movies in datatable</div>
          <MoviesTable
            movies={movies}
            handleDelete={this.handleDelete}
            handleLike={this.handleLike}
            onSort={this.onSort}
            sortOrder={sortOrder}
          />
          <Pagination
            itemsCount={totalCount}
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
