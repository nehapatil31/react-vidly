import React from "react";

const MovieForm = props => {
  const handleSave = () => {
    //Navigate to movies page
    props.history.replace("/movies");
  };
  return (
    <div>
      <h1>MovieForm {props.match.params.movieId}</h1>
      <button type="button" className="btn btn-primary" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default MovieForm;
