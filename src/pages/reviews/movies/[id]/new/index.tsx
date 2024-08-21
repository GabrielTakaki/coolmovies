import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "../../../../../redux/store";
import { reviewsActions } from "../../../../../redux/slices/reviewsSlice";
import FlexColumn from "../../../../../components/layout/FlexColumn";
import Text from "../../../../../components/data-display/Text";
import { SPACINGS } from "../../../../../consts/design-system/global-tokens/spacings";
import FlexRow from "../../../../../components/layout/FlexRow";
import Divider from "../../../../../components/data-display/Divider";
import Rating from "../../../../../components/inputs/Rating";
import TextField from "../../../../../components/inputs/TextField";
import Button from "../../../../../components/inputs/Button";
import useForm from "../../../../../hooks/useForm";
import { Review } from "../../../../../models/Review";
import { selectMovieById } from "../../../../../redux/slices/moviesSlice";

function NewMovieReview() {
  const router = useRouter();
  const { values, handleChange } = useForm({
    initialValues: {
      title: "",
      body: "",
      name: "",
      rating: null,
    },
  });

  const movie = useAppSelector((state) =>
    selectMovieById(state, router.query.id as string)
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      reviewsActions.createReview(values as unknown as Review);
    },
    [values]
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
            precision={0.5}
            onChange={(e, rating) => handleChange("rating", rating)}
          />
        </FlexColumn>
        <Divider />
        <FlexColumn component="section" gap={SPACINGS.xs}>
          <Text variant="body1" weight="semibold">
            Add a title
          </Text>
          <TextField
            name="title"
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
            multiline
            rows={6}
            name="body"
            value={values.body}
            onChange={(e) => handleChange("body", e.target.value)}
            placeholder="What did you like or dislike?"
          />
        </FlexColumn>
        <Divider />
        <FlexColumn component="section" gap={SPACINGS.xs}>
          <Text variant="body1" weight="semibold">
            Choose your public name
          </Text>
          <TextField
            name="name"
            value={values.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </FlexColumn>

        <FlexColumn marginTop={SPACINGS.lg} component="div" alignSelf="end">
          <Button color="info" type="submit" label="Submit" />
        </FlexColumn>
      </FlexColumn>
    </form>
  );
}

export default NewMovieReview;
