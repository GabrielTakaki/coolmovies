import React from "react";
import { useAppSelector } from "../../../redux/store";
import {
  getMovieAverageRating,
  getMovieById,
  getReviewsIdsByMovieId,
} from "../../../redux/slices/entities/slice";
import FlexRow from "../../../components/layout/FlexRow";
import FlexColumn from "../../../components/layout/FlexColumn";
import Text from "../../../components/data-display/Text";
import { SPACINGS } from "../../../consts/design-system/global-tokens/spacings";
import List from "../../../components/data-display/List";
import ReviewListItem from "./ReviewListItem";

function MoviesListItem({ movieId }: { movieId: string }) {
  const movie = useAppSelector((state) => getMovieById(state, movieId));
  const movieAverageRating = useAppSelector((state) =>
    getMovieAverageRating(state, movieId)
  );
  const reviewsIdsByMovie = useAppSelector((state) =>
    getReviewsIdsByMovieId(state, movieId)
  );

  if (!movie) {
    return null;
  }
  return (
    <FlexRow component="li" gap={SPACINGS.md}>
      <img
        style={{ width: "66px", height: "86px", borderRadius: "8px" }}
        src={movie.imgUrl}
        alt={movie.title}
      />
      <FlexColumn component="section">
        <Text>{movie.title}</Text>
        <Text weight="medium" color="neutral" level={500} variant="caption">
          {movieAverageRating}
        </Text>
        <List
          data={reviewsIdsByMovie || []}
          renderItem={(reviewId) => <ReviewListItem reviewId={reviewId} />}
          keyExtractor={(reviewId) => reviewId}
        />
      </FlexColumn>
    </FlexRow>
  );
}

export default MoviesListItem;
