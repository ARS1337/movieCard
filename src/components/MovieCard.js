import React from "react";
import Card from "@material-ui/core/Card";
import {
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Paper,
} from "@material-ui/core";
import StarRating from "./StarRating";
import Typography from "@material-ui/core/Typography";

function MovieCard(props) {
  const { movieData } = props;
  console.log(movieData);
  return (
    <div>
      <Grid item md={12} >
        <Paper elevation={23}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h4" component="h2">
                {movieData.title}
              </Typography>
              <CardMedia
                style={{
                  height: 0,
                  paddingTop: "56.25%", // 16:9
                  maxWidth: "100%",
                  height: "auto",
                }}
                image={movieData.image}
                title="Paella dish"
              />
              <br />

              <Typography variant="p" component="h3">
                {movieData.subtitle}
              </Typography>

              <Typography>{movieData.description}</Typography>

              <StarRating rating={movieData.rating} />
            </CardContent>
          </Card>
        </Paper>
      </Grid>
      <br />
      <br />
      <br />
    </div>
  );
}

export default MovieCard;
