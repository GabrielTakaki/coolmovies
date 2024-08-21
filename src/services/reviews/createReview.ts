import { gql } from "@apollo/client";
import { client } from "../../core/apolloClient";

const CREATE_REVIEW = gql`
  mutation CreateReview($input: CreateReviewInput!) {
    createReview(input: $input) {
      id
      title
      body
      rating
      userReviewerId
      movieId
    }
  }
`;

export const createReview = async (input: any) => {
  const result = await client.mutate({
    mutation: CREATE_REVIEW,
    variables: { input },
  });
  return result.data.createReview;
};
