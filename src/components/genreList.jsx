import React from "react";

const GenreList = props => {
  return (
    <ul className="list-group">
      <li
        className={`clickable list-group-item${
          props.activeGenre === "all" ? " active" : ""
        }`}
        key="all"
        onClick={() => props.handleGenre("all")}
      >
        All
      </li>
      {props.genres.map(genre => (
        <li
          className={`clickable list-group-item${
            props.activeGenre === genre._id ? " active" : ""
          }`}
          key={genre._id}
          onClick={() => props.handleGenre(genre)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
