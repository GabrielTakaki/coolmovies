import { selectAllReviews } from "../slices/reviewsSlice";
import { createSelector } from "@reduxjs/toolkit";
import { selectMovieById } from "../slices/moviesSlice";

export const selectReviewsByMovieId = createSelector(
  [selectAllReviews, (state: any, movieId: string) => movieId],
  (reviews, movieId) =>
    reviews
      .filter((review) => review.movieId === movieId)
      .map((review) => review.id)
);

export const selectMovieWithReviews = createSelector(
  [selectMovieById, selectReviewsByMovieId],
  (movie, reviews) => {
    if (!movie) return null;
    return {
      ...movie,
      reviews,
    };
  }
);

export const selectRatingAverageById = createSelector(
  [selectAllReviews, (state: any, movieId: string) => movieId],
  (reviewsEntities, movieId) => {
    const reviews = Object.values(reviewsEntities).filter(
      (review) => review.movieId === movieId
    );

    if (reviews.length === 0) {
      return null;
    }

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (totalRating / reviews.length).toFixed(2);
  }
);
