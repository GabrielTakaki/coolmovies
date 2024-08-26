import React from "react";
import ReviewForm from "./components/ReviewForm";
import { useRouter } from "next/router";
import { useAppSelector } from "../../redux/store";
import { selectReviewById } from "../../redux/slices/reviewsSlice";

function EditReview() {
  const router = useRouter();
  const review = useAppSelector((state) =>
    selectReviewById(state, router.query.reviewId as string)
  );

  if (!review) {
    return null;
  }
  return (
    <ReviewForm method="PUT" reviewId={review.id} movieId={review.movieId} />
  );
}

export default EditReview;
