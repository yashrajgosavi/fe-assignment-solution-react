import React from "react";

const MovieInfo = React.memo(
  ({ movie }) => {
    if (movie) {
      return (
        <>
          <h2>{movie.title}</h2>
          <p>{`EPISODE ${movie.episode_id}`}</p>
          <p>{movie.opening_crawl}</p>
        </>
      );
    } else {
      return <p>No Movie selected</p>;
    }
  },
  (prevProps, nextProps) => prevProps.movie === nextProps.movie
);

export default MovieInfo;
