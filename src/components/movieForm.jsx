import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class MovieForm extends Form {
    state = {
        data: {
            _id: "",
            title: "",
            genre: { _id: "", name: "" },
            numberInStock: 7,
            dailyRentalRate: 3.5
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
        //Call to server
        console.log("submitted");
        //Navigate to movies page
        this.props.history.replace("/movies");
    };
    render() {
        return (
            <div>
                <h1>MovieForm {this.props.match.params.movieId}</h1>
                {this.renderInput("title", "Title")}
                {this.renderInput("numberInStock", "Number in stock")}
                {this.renderInput("dailyRentalRate", "Daily rental rate")}
                {this.renderSubmit("Save")}
            </div>
        );
    }
}

export default MovieForm;
