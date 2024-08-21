import React from "react";
import Text from "../../components/data-display/Text";
import FlexColumn from "../../components/layout/FlexColumn";
import MoviesList from "./components/MoviesList";

function Reviews() {
  return (
    <FlexColumn component="section">
      <Text variant="h6">Reviews</Text>
      <MoviesList />
    </FlexColumn>
  );
}

export default Reviews;
