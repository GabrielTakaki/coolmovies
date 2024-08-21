import {
  createEntityAdapter,
  createSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Review } from "../../models/Review";

const reviewsAdapter = createEntityAdapter<Review>();

export const reviewsSlice = createSlice({
  initialState: reviewsAdapter.getInitialState(),
  name: "reviews",
  reducers: {
    fetchReviews: () => {},
    createReview: (state, action: PayloadAction<Review>) => {
      reviewsAdapter.addOne(state, action.payload);
    },
    updateReview: (state, action: PayloadAction<Review>) => {
      reviewsAdapter.updateOne(state, {
        id: action.payload.id,
        changes: action.payload,
      });
    },
    setReviews: (state, action: PayloadAction<{ nodes: Review[] }>) => {
      reviewsAdapter.setAll(state, action.payload.nodes);
    },
    mergeEntities: (state, action: PayloadAction<Review>) => {
      reviewsAdapter.upsertOne(state, action.payload);
    },
    insertOne: (state, action: PayloadAction<Review>) => {
      reviewsAdapter.addOne(state, action.payload);
    },
    clearReviews: (state) => {
      reviewsAdapter.removeAll(state);
    },
  },
});

export const {
  selectById: selectReviewById,
  selectAll: selectAllReviews,
  selectEntities: selectReviewEntities,
  selectIds: selectReviewIds,
} = reviewsAdapter.getSelectors((state: any) => state.reviews);

export const { actions: reviewsActions } = reviewsSlice;
export type SliceAction = typeof reviewsActions;

export default reviewsSlice.reducer;
