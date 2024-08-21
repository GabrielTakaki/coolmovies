import React from "react";
import List from "../../../components/data-display/List";
import { useAppSelector } from "../../../redux/store";
import Button from "../../../components/inputs/Button";
import ReviewsListItem from "./ReviewListItem";
import { selectReviewIds } from "../../../redux/slices/reviewsSlice";

function ReviewList() {
  const reviewIds = useAppSelector(selectReviewIds);

  return (
    <List
      keyExtractor={(item) => item.toString()}
      renderItem={(item) => <ReviewsListItem reviewId={item.toString()} />}
      data={reviewIds}
      renderActions={(item) => (
        <Button
          variant="outlined"
          label="Edit"
          color="secondary"
          onClick={() => console.log(item)}
        />
      )}
    />
  );
}

export default ReviewList;
