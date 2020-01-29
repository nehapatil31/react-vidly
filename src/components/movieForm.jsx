import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getGenres } from "../services/fakeGenreService";
import { saveMovie } from "../services/fakeMovieService";

let lastId = 0;
class MovieForm extends Form {
  state = {
    data: {
      _id: "",
      title: "",
      genre: { _id: "", name: "" },
      numberInStock: undefined,
      dailyRentalRate: undefined,
      publishDate: "2018-01-03T19:04:28.809Z",
      liked: true
    },
    errors: {}
  };
  schema = {
    title: Joi.string()
      .required()
      .label("Title"),
    numberInStock: Joi.number()
      .required()
      .label("Number in stock"),
    dailyRentalRate: Joi.number()
      .required()
      .label("Daily rental rate")
  };

  doSubmit = () => {
    //Add new movie to list
    const movieData = { ...this.state.data };
    if (this.props.match.path === "/movies/new") {
      lastId++;
      movieData._id = lastId;
    }
    saveMovie(movieData);
    //Call to server
    console.log("submitted");
    //Navigate to movies page
    this.props.history.replace("/movies");
  };
  handleChangeSelect = ({ target }) => {
    const data = { ...this.state.data };
    data.genre._id = target.value;
    const genres = getGenres();
    data.genre.name = genres.find(
      element => element._id === data.genre._id
    ).name;
    this.setState({ data });
  };
  componentDidMount() {
    const { movieId } = this.props.match.params;
    if (!movieId) return;
    const { movie } = this.props.location.state;
    this.setState({ data: movie });
  }
  render() {
    return (
      <div>
        <h1>MovieForm {this.props.match.params.movieId}</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          <label className="my-1 mr-2" htmlFor="genre">
            Genre
          </label>
          <select
            className="custom-select my-1 mr-sm-2"
            id="genre"
            name="genre"
            value={this.state.data.genre._id}
            onChange={this.handleChangeSelect}
          >
            <option>Choose...</option>
            {getGenres().map(genre => (
              <option value={genre._id} key={genre._id}>
                {genre.name}
              </option>
            ))}
          </select>
          {this.renderInput("numberInStock", "Number in stock")}
          {this.renderInput("dailyRentalRate", "Daily rental rate")}
          {this.renderSubmit("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
