import React from "react";
import List from "../../../components/data-display/List";
import { useAppSelector } from "../../../redux/store";
import ReviewsListItem from "./ReviewListItem";
import { selectReviewIds } from "../../../redux/slices/reviewsSlice";

function ReviewList() {
  const reviewIds = useAppSelector(selectReviewIds);

  return (
    <List
      keyExtractor={(item) => item.toString()}
      renderItem={(item) => <ReviewsListItem reviewId={item.toString()} />}
      data={reviewIds}
    />
  );
}

export default ReviewList;
