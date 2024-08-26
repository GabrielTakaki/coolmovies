import { gql } from "@apollo/client";
import { client } from "@core/apolloClient";
import { Review } from "@models/Review";

const CREATE_REVIEW = gql`
  mutation CreateReview($input: CreateMovieReviewInput!) {
    createMovieReview(input: $input) {
      movieReview {
        id
        title
        body
        rating
        userReviewerId
        movieId
        userByUserReviewerId {
          id
          name
        }
      }
    }
  }
`;

export const createReview = async (
  input: Pick<
    Review,
    "movieId" | "body" | "title" | "userReviewerId" | "rating"
  >
) => {
  const result = await client.mutate({
    mutation: CREATE_REVIEW,
    variables: { input: { movieReview: input } },
  });

  return result.data.createMovieReview.movieReview;
};
