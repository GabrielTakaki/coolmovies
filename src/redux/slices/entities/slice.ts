import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Movie } from "../../../models/Movie";
import { Review } from "../../../models/Review";

interface MoviesAdapter extends Omit<Movie, "movieReviewsByMovieId"> {
  movieReviewsByMovieId: string[];
}

interface RatingsAdapter extends Omit<Review, "userByUserReviewerId"> {}

const moviesAdapter = createEntityAdapter<MoviesAdapter>();
const reviewsAdapter = createEntityAdapter<RatingsAdapter>();

function normalizeMovie(movie: Movie): MoviesAdapter {
  return {
    ...movie,
    movieReviewsByMovieId: movie.movieReviewsByMovieId.nodes.map((r) => r.id),
  };
}

export const slice = createSlice({
  initialState: {
    loading: false,
    movies: moviesAdapter.getInitialState(),
    reviews: reviewsAdapter.getInitialState(),
  },
  name: "entities",
  reducers: {
    fetch: (state) => {
      state.loading = true;
    },
    clearData: (state) => {
      state.movies = moviesAdapter.getInitialState();
      state.reviews = reviewsAdapter.getInitialState();
    },
    normalize: (state, action: PayloadAction<{ data: { nodes: Movie[] } }>) => {
      state.loading = false;
      const entities = action.payload.data.nodes.reduce(
        (acc, node) => {
          const { movieReviewsByMovieId } = node;

          return {
            movies: (acc?.movies || []).concat(normalizeMovie(node)),
            reviews: (acc?.reviews || []).concat(
              ...movieReviewsByMovieId.nodes
            ),
          };
        },
        {
          movies: [] as MoviesAdapter[],
          reviews: [] as RatingsAdapter[],
        }
      );

      moviesAdapter.setMany(state.movies, entities.movies);
      reviewsAdapter.setMany(state.reviews, entities.reviews);
    },
    loadError: (state) => {
      state.loading = false;
      // state.data = ["Error Fetching :("];
    },
  },
});

export const { actions } = slice;
export type SliceAction = typeof actions;
export default slice.reducer;
