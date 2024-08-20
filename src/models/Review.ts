export interface Review {
  body: string;
  id: string;
  rating: number;
  title: string;
  userReviewerId: string;
  userByUserReviewerId: {
    id: string;
    name: string;
  };
}
