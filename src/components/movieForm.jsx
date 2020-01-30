import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import { getGenres } from "../services/fakeGenreService";
import { saveMovie, getMovie } from "../services/fakeMovieService";

class MovieForm extends Form {
    state = {
        data: {
            _id: "",
            title: "",
            genre: { _id: "", name: "" },
            genreId: "",
            numberInStock: "",
            dailyRentalRate: ""
        },
        errors: {}
    };
    schema = {
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
        const modalData = {
            _id: data._id,
            title: data.title,
            genreId: data.genre._id,
            numberInStock: data.numberInStock,
            dailyRentalRate: data.dailyRentalRate
        };
        return modelData;
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
    // handleChangeSelect = ({ target }) => {
    //   const data = { ...this.state.data };
    //   data.genre._id = target.value;
    //   const genres = getGenres();
    //   data.genre.name = genres.find(
    //     element => element._id === data.genre._id
    //   ).name;
    //   this.setState({ data });
    // };
    componentDidMount() {
        const { movieId } = this.props.match.params;
        if (!movieId) return;
        const movieData = getMovie(movieId);
        const newFlag = this.props.location.state
            ? this.props.location.state.new
            : undefined;
        if (!movieData && !newFlag) {
            return <Redirect to="/not-found" />;
        }

        this.setState({ data: movieData });
    }
    render() {
        const { movieId } = this.props.match.params;
        const movie = getMovie(movieId);
        const newFlag = this.props.location.state
            ? this.props.location.state.new
            : undefined;

        if (!movie && !newFlag) {
            return <Redirect to="/not-found" />;
        }

        return (
            <div>
                <h1>MovieForm {this.props.match.params.movieId}</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}
                    {this.renderInput("genre", "Genre")}
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
