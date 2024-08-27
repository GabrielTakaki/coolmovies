import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Movie } from "@models/Movie";

interface MovieAdapter extends Omit<Movie, "movieReviewsByMovieId"> {
  movieReviewsByMovieId: string[];
}

const moviesAdapter = createEntityAdapter<MovieAdapter>();

function normalizeMovie(movie: Movie): MovieAdapter {
  return {
    ...movie,
    movieReviewsByMovieId: movie.movieReviewsByMovieId.nodes.map((r) => r.id),
  };
}

export const moviesSlice = createSlice({
  initialState: { ...moviesAdapter.getInitialState(), isRetrieving: false },
  name: "movies",
  reducers: {
    fetchMovies: (state) => {
      state.isRetrieving = true;
    },
    setMovies: (state, action: PayloadAction<{ nodes: Movie[] }>) => {
      const movies = action.payload.nodes.map(normalizeMovie);
      state.isRetrieving = false;
      moviesAdapter.setAll(state, movies);
    },
    clearMovies: (state) => {
      moviesAdapter.removeAll(state);
    },
  },
});

export const { selectById: selectMovieById, selectIds: selectMovieIds } =
  moviesAdapter.getSelectors((state: any) => state.movies);
export const { actions: movieActions } = moviesSlice;
export type SliceAction = typeof movieActions;

export default moviesSlice.reducer;
