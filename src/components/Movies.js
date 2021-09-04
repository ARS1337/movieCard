import React from "react";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
import data from "../utils/MovieService";

function Movies(props) {
  return (
    <>
      <MovieList data={data} />
    </>
  );
}

export default Movies;
