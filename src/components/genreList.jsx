import React, { useState } from "react";
import { getGenres } from "../services/fakeGenreService";

const GenreList = props => {
  const [genres, setGenres] = useState(getGenres());

  return (
    <ul className="list-group">
      <li
        className={`list-group-item${
          props.activeGenre === "all" ? " active" : ""
        }`}
        key="all"
        onClick={() => props.handleGenre("all")}
      >
        All
      </li>
      {genres.map(genre => (
        <li
          className={`list-group-item${
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
