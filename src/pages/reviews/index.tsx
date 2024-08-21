import React, { useEffect } from "react";
import { moviesActions, useAppDispatch } from "../../redux/store";
import Text from "../../components/data-display/Text";
import FlexColumn from "../../components/layout/FlexColumn";
import MoviesList from "./components/MoviesList";

function Reviews() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(moviesActions.fetch());
  }, []);

  return (
    <FlexColumn component="section">
      <Text variant="h6">Reviews</Text>
      <MoviesList />
    </FlexColumn>
  );
}

export default Reviews;
