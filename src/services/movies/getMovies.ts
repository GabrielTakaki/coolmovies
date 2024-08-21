import { gql } from "@apollo/client";
import { client } from "../../core/apolloClient";
import { Movie } from "../../models/Movie";

const GET_MOVIES = gql`
  query AllMovies {
    allMovies {
      nodes {
        id
        imgUrl
        movieDirectorId
        userCreatorId
        title
        releaseDate
        nodeId
        userByUserCreatorId {
          id
          name
          nodeId
        }
        movieReviewsByMovieId {
          nodes {
            id
          }
        }
      }
    }
  }
`;

export const getMovies = async (): Promise<{ nodes: Movie[] }> => {
  const result = await client.query({
    query: GET_MOVIES,
  });
  return result.data.allMovies;
};
