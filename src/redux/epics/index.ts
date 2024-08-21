import { combineEpics } from "redux-observable";
import {
  createReviewEpic,
  fetchReviewsEpic,
  updateReviewEpic,
} from "./reviews";
import { fetchMoviesEpic } from "./movies";

export const rootEpic = combineEpics(
  fetchMoviesEpic,
  createReviewEpic,
  updateReviewEpic,
  fetchMoviesEpic,
  fetchReviewsEpic
);
