import { gql } from "@apollo/client";
import { client } from "../../core/apolloClient";
import { Review } from "../../models/Review";

const GET_REVIEWS = gql`
  query allMovieReviews {
    allMovieReviews {
      nodes {
        id
        title
        body
        rating
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

export const getReviews = async (): Promise<Review[]> => {
  const result = await client.query({
    query: GET_REVIEWS,
  });
  return result.data.allMovieReviews;
};
