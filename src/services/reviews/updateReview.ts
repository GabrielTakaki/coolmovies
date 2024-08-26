import { gql } from "@apollo/client";
import { client } from "../../core/apolloClient";
import { Review } from "../../models/Review";

const UPDATE_REVIEW = gql`
  mutation UpdateMovieReview($input: UpdateMovieReviewInput!) {
    updateMovieReview(input: $input) {
      movieReview {
        id
        title
        body
        rating
        userReviewerId
        nodeId
        movieId
        userByUserReviewerId {
          id
          name
        }
      }
    }
  }
`;

export const updateReview = async (
  nodeId: string,
  input: Omit<Review, "userByUserReviewerId" | "nodeId">
) => {
  const result = await client.mutate({
    mutation: UPDATE_REVIEW,
    variables: { input: { nodeId, movieReviewPatch: input } },
  });

  return result.data.updateMovieReview.movieReview;
};
