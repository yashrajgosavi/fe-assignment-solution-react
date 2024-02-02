import React from "react";

const MovieList = ({ movies, onMovieClick }) => (
  <ul>
    {movies.map((movie) => (
      <li
        key={movie.episode_id}
        onClick={() => onMovieClick(movie)}
        className="movie-title"
      >
        <div className="movie-info">
          <p>{`EPISODE ${movie.episode_id}`}</p>
          <p>{movie.title}</p>
          <p> {`Year ${movie.release_date.substring(0, 4)}`}</p>
        </div>
      </li>
    ))}
  </ul>
);

export default MovieList;
