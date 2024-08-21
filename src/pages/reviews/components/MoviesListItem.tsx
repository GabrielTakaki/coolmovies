import React, { useCallback } from "react";
import { useAppSelector } from "../../../redux/store";
import { selectMovieById } from "../../../redux/slices/moviesSlice";
import FlexRow from "../../../components/layout/FlexRow";
import FlexColumn from "../../../components/layout/FlexColumn";
import Text from "../../../components/data-display/Text";
import { SPACINGS } from "../../../consts/design-system/global-tokens/spacings";
import List from "../../../components/data-display/List";
import ReviewListItem from "./ReviewListItem";
import Button from "../../../components/inputs/Button";
import { useRouter } from "next/router";
import {
  selectRatingAverageById,
  selectReviewsByMovieId,
} from "../../../redux/selectors";

function MoviesListItem({ movieId }: { movieId: string }) {
  const router = useRouter();

  const movie = useAppSelector((state) => selectMovieById(state, movieId));
  const movieAverageRating = useAppSelector((state) =>
    selectRatingAverageById(state, movieId)
  );
  const reviewsIdsByMovie = useAppSelector((state) =>
    selectReviewsByMovieId(state, movieId)
  );

  const handleAddReviewClick = useCallback(() => {
    router.push(`/reviews/movies/${movieId}/new`);
  }, [movieId]);

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
          {movie.releaseDate}
        </Text>
        <Text weight="medium" color="neutral" level={500} variant="caption">
          Rating: {movieAverageRating}
        </Text>
        <List
          data={reviewsIdsByMovie || []}
          renderItem={(reviewId) => <ReviewListItem reviewId={reviewId} />}
          keyExtractor={(reviewId) => reviewId}
        />
        <FlexRow component="div" alignSelf="end" marginTop={SPACINGS.lg}>
          <Button label="Add Review" onClick={handleAddReviewClick} />
        </FlexRow>
      </FlexColumn>
    </FlexRow>
  );
}

export default MoviesListItem;
