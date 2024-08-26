export interface Review {
  body: string;
  id: string;
  rating: number;
  title: string;
  movieId: string;
  nodeId?: string;
  userReviewerId: string;
  userByUserReviewerId?: {
    id: string;
    name: string;
  };
}
