import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Review } from "../../models/Review";

const reviewsAdapter = createEntityAdapter<Review>();

export const reviewsSlice = createSlice({
  initialState: {
    ...reviewsAdapter.getInitialState(),
    isCreating: false,
    isUpdating: false,
    isRetrieving: false,
  },
  name: "reviews",
  reducers: {
    fetchReviews: (state) => {
      state.isRetrieving = true;
    },
    createReview: (state, action: PayloadAction<Omit<Review, "id">>) => {
      state.isCreating = true;
    },
    updateReview: (
      state,
      action: PayloadAction<Omit<Review, "userByUserReviewerId">>
    ) => {
      state.isUpdating = true;
    },
    setReviews: (state, action: PayloadAction<{ nodes: Review[] }>) => {
      state.isRetrieving = false;
      reviewsAdapter.setAll(state, action.payload.nodes);
    },
    updateOne: (state, action: PayloadAction<Review>) => {
      reviewsAdapter.updateOne(state, {
        id: action.payload.id,
        changes: action.payload,
      });
      state.isUpdating = false;
    },
    insertOne: (state, action: PayloadAction<Review>) => {
      state.isCreating = false;
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
  selectIds: selectReviewIds,
} = reviewsAdapter.getSelectors((state: any) => state.reviews);

export const { actions: reviewsActions } = reviewsSlice;
export type SliceAction = typeof reviewsActions;

export default reviewsSlice.reducer;
