import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
    state = {
        data: {
            username: "",
            password: "",
            fullName: ""
        },
        errors: {}
    };
    schema = {
        username: Joi.string()
            .required()
            .label("Username")
            .email(),
        password: Joi.string()
            .required()
            .label("Password")
            .min(5),
        fullName: Joi.string()
            .required()
            .label("Name")
    };

    doSubmit = () => {
        //Call to server
        console.log("submitted");
    };

    render() {
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("fullName", "Name")}
                    {this.renderSubmit("Register")}
                </form>
            </div>
        );
    }
}

export default RegisterForm;
