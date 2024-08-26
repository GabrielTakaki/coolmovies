import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@redux/store";
import { selectMovieById } from "@redux/slices/moviesSlice";
import useForm from "@hooks/useForm";
import { reviewsActions, selectReviewById } from "@redux/slices/reviewsSlice";
import FlexColumn from "@components/layout/FlexColumn";
import { SPACINGS } from "@consts/design-system/global-tokens/spacings";
import Text from "@components/data-display/Text";
import FlexRow from "@components/layout/FlexRow";
import Divider from "@components/data-display/Divider";
import Rating from "@components/inputs/Rating";
import TextField from "@components/inputs/TextField";
import Button from "@components/inputs/Button";

function ReviewForm({
  method,
  reviewId,
  movieId,
}: {
  method: "POST" | "PUT";
  reviewId?: string;
  movieId: string;
}) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user);
  const movie = useAppSelector((state) => selectMovieById(state, movieId));
  const review = useAppSelector((state) =>
    selectReviewById(state, reviewId as string)
  );
  const isLoading = useAppSelector(
    (state) => state.reviews.isCreating || state.reviews.isUpdating
  );

  const { values, handleChange, resetForm } = useForm({
    initialValues: {
      title: review?.title || "",
      body: review?.body || "",
      rating: review?.rating || 0,
    },
  });

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (user.id && values) {
        dispatch(
          method === "POST"
            ? reviewsActions.createReview({
                ...values,
                movieId,
                userReviewerId: user.id,
              })
            : reviewsActions.updateReview({
                ...values,
                id: reviewId as string,
                movieId,
                nodeId: review?.nodeId,
                userReviewerId: user.id,
              })
        );
        resetForm();
        router.back();
      }
    },
    [values, user.id, movieId]
  );

  if (!movie) {
    return null;
  }
  return (
    <form onSubmit={handleSubmit}>
      <FlexColumn component="main" gap={SPACINGS.md}>
        <Text variant="h6" weight="semibold">
          Leave a review
        </Text>
        <FlexRow component="section" gap={SPACINGS["3xl"]} alignItems="center">
          <img
            style={{ width: "66px", height: "86px", borderRadius: "8px" }}
            src={movie.imgUrl}
            alt={movie.title}
          />
          <Text>{movie.title}</Text>
        </FlexRow>
        <Divider />
        <FlexColumn component="section">
          <Text variant="body1" weight="semibold">
            Overall rating
          </Text>
          <Rating
            value={values.rating}
            name="rating"
            disabled={isLoading}
            onChange={(e, rating) => handleChange("rating", rating)}
          />
        </FlexColumn>
        <Divider />
        <FlexColumn component="section" gap={SPACINGS.xs}>
          <Text variant="body1" weight="semibold">
            Add a title
          </Text>
          <TextField
            required
            name="title"
            disabled={isLoading}
            value={values.title}
            placeholder="What is most important to know?"
            onChange={(e) => handleChange("title", e.target.value)}
          />
        </FlexColumn>
        <Divider />
        <FlexColumn component="section" gap={SPACINGS.xs}>
          <Text variant="body1" weight="semibold">
            Add a written review
          </Text>
          <TextField
            required
            multiline
            disabled={isLoading}
            rows={6}
            name="body"
            value={values.body}
            onChange={(e) => handleChange("body", e.target.value)}
            placeholder="What did you like or dislike?"
          />
        </FlexColumn>

        <FlexColumn marginTop={SPACINGS.lg} component="div" alignSelf="end">
          <Button
            type="submit"
            label="Submit"
            color="secondary"
            disabled={isLoading}
          />
        </FlexColumn>
      </FlexColumn>
    </form>
  );
}

export default ReviewForm;
