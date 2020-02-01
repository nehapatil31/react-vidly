import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getGenres } from "../services/fakeGenreService";
import { saveMovie, getMovie } from "../services/fakeMovieService";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    errors: {},
    genres: []
  };
  schema = {
    _id: Joi.string(),
    genreId: Joi.string()
      .required()
      .label("Genre"),
    title: Joi.string()
      .required()
      .label("Title"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .label("Number in stock"),
    dailyRentalRate: Joi.number()
      .min(0)
      .max(10)
      .required()
      .label("Daily rental rate")
  };

  dataToModelData = data => {
    return {
      _id: data._id,
      title: data.title,
      genreId: data.genre._id,
      numberInStock: data.numberInStock,
      dailyRentalRate: data.dailyRentalRate
    };
  };
  doSubmit = () => {
    //Add new movie to list
    const movieData = { ...this.state.data };
    saveMovie(movieData);
    //Call to server
    console.log("submitted");
    //Navigate to movies page
    this.props.history.replace("/movies");
  };
  componentDidMount() {
    //set genres
    const genres = getGenres();
    this.setState({ genres });

    const { movieId } = this.props.match.params;
    if (movieId === "new") return;

    const movieData = getMovie(movieId);
    if (!movieData) return this.props.history.replace("/not-found");

    this.setState({ data: this.dataToModelData(movieData) });
  }
  render() {
    return (
      <div>
        <h1>MovieForm {this.props.match.params.movieId}</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number in stock")}
          {this.renderInput("dailyRentalRate", "Daily rental rate")}
          {this.renderSubmit("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
