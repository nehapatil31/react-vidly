import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getGenres } from "../services/fakeGenreService";

class MovieForm extends Form {
  state = {
    data: {
      _id: "",
      title: "",
      genre: "",
      numberInStock: 7,
      dailyRentalRate: 3.5
    },
    errors: {}
  };
  schema = {
    genre: Joi.string(),
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
    //Call to server
    console.log("submitted");
    //Navigate to movies page
    this.props.history.replace("/movies");
  };
  handleChangeSelect = ({ target }) => {
    const data = { ...this.state.data };
    data[target.name] = target.value;
    this.setState({ data });
  };
  render() {
    return (
      <div>
        <h1>MovieForm {this.props.match.params.movieId}</h1>
        {this.renderInput("title", "Title")}
        <label className="my-1 mr-2" htmlFor="genre">
          Genre
        </label>
        <select
          className="custom-select my-1 mr-sm-2"
          id="genre"
          name="genre"
          value={this.state.data.genre}
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
      </div>
    );
  }
}

export default MovieForm;
