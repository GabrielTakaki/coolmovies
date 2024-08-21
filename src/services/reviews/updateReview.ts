import { gql } from "@apollo/client";
import { client } from "../../core/apolloClient";

const UPDATE_REVIEW = gql`
  mutation UpdateReview($input: UpdateReviewInput!) {
    updateReview(input: $input) {
      review {
        id
        title
        body
        rating
        userReviewerId
        movieId
      }
    }
  }
`;

export const updateReview = async (input: any) => {
  const result = await client.mutate({
    mutation: UPDATE_REVIEW,
    variables: { input },
  });
  return result.data.updateReview.review;
};
