import { combineEpics } from "redux-observable";
import {
  createReviewEpic,
  fetchReviewsApic,
  updateReviewEpic,
} from "./reviews";
import { fetchMoviesEpic } from "./movies";

export const rootEpic = combineEpics(
  fetchMoviesEpic,
  createReviewEpic,
  updateReviewEpic,
  fetchMoviesEpic,
  fetchReviewsApic
);
