import React, { useEffect } from "react";
import { moviesActions, useAppDispatch } from "../../redux/store";
import Text from "../../components/data-display/Text";
import FlexColumn from "../../components/layout/FlexColumn";
import FlexRow from "../../components/layout/FlexRow";
import Button from "../../components/inputs/Button";
import MoviesList from "./components/MoviesList";

function Reviews() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(moviesActions.fetch());
  }, []);

  return (
    <FlexColumn component="section">
      <FlexRow justifyContent="space-between" component="section">
        <Text variant="h6">Reviews</Text>
        <Button label="Add Review" />
      </FlexRow>
      <MoviesList />
    </FlexColumn>
  );
}

export default Reviews;
