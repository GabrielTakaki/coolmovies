import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createEpicMiddleware } from "redux-observable";
import { CreateStoreOptions } from "../types";
import { rootEpic } from "../epics";
import moviesReducer from "../slices/moviesSlice";
import reviewsReducer from "../slices/reviewsSlice";

export const createStore = ({ epicDependencies }: CreateStoreOptions) => {
  const epicMiddleware = createEpicMiddleware({
    dependencies: epicDependencies,
  });

  const createdStore = configureStore({
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(epicMiddleware),
    reducer: {
      movies: moviesReducer,
      reviews: reviewsReducer,
    },
  });

  epicMiddleware.run(rootEpic);

  return createdStore;
};

export type RootState = ReturnType<ReturnType<typeof createStore>["getState"]>;
export type AppDispatch = ReturnType<typeof createStore>["dispatch"];

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
