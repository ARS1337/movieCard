import { Grid } from "@material-ui/core";
import React from "react";
import MovieCard from "./MovieCard";

function MovieList(props) {
  const { data } = props;

  return (
    <div>
      {data.map((x) => {
        return (
          <>
            <Grid
              container
              spacing={1}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <MovieCard movieData={x} />
            </Grid>
          </>
        );
      })}
    </div>
  );
}

export default MovieList;
