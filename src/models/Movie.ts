export interface Movie {
  id: string;
  imgUrl: string;
  movieDirectorId: string;
  nodeId: string;
  releaseDate: string;
  title: string;
  movieReviewsByMovieId: { nodes: { id: string }[] };
  userByUserCreatorId: {
    id: string;
    name: string;
    nodeId: string;
  };
  userCreatorId: string;
}
