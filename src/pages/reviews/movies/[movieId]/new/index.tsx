import React from "react";
import ReviewForm from "../../../components/ReviewForm";
import { useRouter } from "next/router";

function NewMovieReview() {
  const router = useRouter();
  return <ReviewForm movieId={router.query.movieId as string} method="POST" />;
}

export default NewMovieReview;
