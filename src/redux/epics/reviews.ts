import { Epic } from "redux-observable";
import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";
import { reviewsActions, SliceAction } from "../slices/reviewsSlice";
import { getReviews } from "../../services/reviews/getReviews";
import { updateReview } from "../../services/reviews/updateReview";
import { createReview } from "../../services/reviews/createReview";

export const fetchReviewsEpic: Epic = (
  action$: Observable<SliceAction["fetchReviews"]>
) =>
  action$.pipe(
    filter(reviewsActions.fetchReviews.match),
    switchMap(async () => {
      try {
        const result = await getReviews();
        return reviewsActions.setReviews(result);
      } catch (err) {
        // return reviewsActions.loadError();
      }
    })
  );

export const createReviewEpic: Epic = (
  action$: Observable<SliceAction["createReview"]>
) =>
  action$.pipe(
    filter(reviewsActions.createReview.match),
    switchMap(async (action) => {
      try {
        const review = await createReview(action.payload);
        return reviewsActions.insertOne(review);
      } catch (err) {
        // return reviewsActions.loadError();
      }
    })
  );

export const updateReviewEpic: Epic = (
  action$: Observable<SliceAction["updateReview"]>
) =>
  action$.pipe(
    filter(reviewsActions.updateReview.match),
    switchMap(async (action) => {
      try {
        const review = await updateReview(action.payload);
        return reviewsActions.mergeEntities(review);
      } catch (err) {
        // return reviewsActions.loadError();
      }
    })
  );
