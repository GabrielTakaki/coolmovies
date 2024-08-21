import { combineEpics } from "redux-observable";
import {
  createReviewEpic,
  fetchReviewsEpic,
  updateReviewEpic,
} from "./reviews";
import { fetchMoviesEpic } from "./movies";
import { createUserEpic } from "./users";

export const rootEpic = combineEpics(
  fetchMoviesEpic,
  createReviewEpic,
  updateReviewEpic,
  fetchReviewsEpic,
  createUserEpic
);
