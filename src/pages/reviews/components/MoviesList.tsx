import React from "react";
import List from "../../../components/data-display/List";
import { useAppSelector } from "@redux/store";
import MoviesListItem from "./MoviesListItem";
import { selectMovieIds } from "@redux/slices/moviesSlice";

function MoviesList() {
  const movieIds = useAppSelector(selectMovieIds);

  return (
    <List
      keyExtractor={(item) => item.toString()}
      renderItem={(item) => <MoviesListItem movieId={item.toString()} />}
      data={movieIds}
      showDivider
    />
  );
}

export default MoviesList;
