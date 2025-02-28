import { gql } from "@apollo/client";
import { client } from "@core/apolloClient";
import { Review } from "@models/Review";

const GET_REVIEWS = gql`
  query allMovieReviews {
    allMovieReviews {
      nodes {
        id
        title
        body
        rating
        nodeId
        movieId
        userReviewerId
        userByUserReviewerId {
          id
          name
        }
      }
    }
  }
`;

export const getReviews = async (): Promise<{ nodes: Review[] }> => {
  const result = await client.query({
    query: GET_REVIEWS,
  });
  return result.data.allMovieReviews;
};
