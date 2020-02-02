import React from "react";

const GenreList = props => {
  return (
    <ul className="list-group">
      {props.genres.map(genre => (
        <li
          className={`clickable list-group-item${
            props.activeGenre === genre ? " active" : ""
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
