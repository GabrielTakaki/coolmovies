import { Review } from "./Review";

export interface Movie {
  id: string;
  imgUrl: string;
  movieDirectorId: string;
  nodeId: string;
  releaseDate: string;
  title: string;
  movieReviewsByMovieId: { nodes: Review[] };
  userByUserCreatorId: {
    id: string;
    name: string;
    nodeId: string;
  };
  userCreatorId: string;
}
