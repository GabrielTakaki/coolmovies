import React from "react";
import Text from "../../../components/data-display/Text";
import List from "../../../components/data-display/List";
import { useAppSelector } from "../../../redux/store";
import Button from "../../../components/inputs/Button";
import MoviesListItem from "./MoviesListItem";
import ReviewsListItem from "./ReviewListItem";

function ReviewList() {
  const data = useAppSelector((state) => state.data);

  return (
    <List
      keyExtractor={(item) => item.toString()}
      renderItem={(item) => <ReviewsListItem reviewId={item.toString()} />}
      data={data.reviews.ids}
      renderActions={(item) => (
        <Button
          variant="outlined"
          label="Edit"
          onClick={() => console.log(item)}
        />
      )}
    />
  );
}

export default ReviewList;
