import {
  createEntityAdapter,
  createSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Movie } from "../../../models/Movie";
import { Review } from "../../../models/Review";

interface MovieAdapter extends Omit<Movie, "movieReviewsByMovieId"> {
  movieReviewsByMovieId: string[];
}

interface ReviewAdapter extends Review {
  movieId: string;
}

const moviesAdapter = createEntityAdapter<MovieAdapter>();
const reviewsAdapter = createEntityAdapter<ReviewAdapter>();

function normalizeMovie(movie: Movie): MovieAdapter {
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
          const movieReviews = movieReviewsByMovieId.nodes.map(
            (reviewNode) => ({ ...reviewNode, movieId: node.id })
          );

          return {
            movies: (acc?.movies || []).concat(normalizeMovie(node)),
            reviews: (acc?.reviews || []).concat(...movieReviews),
          };
        },
        {
          movies: [] as MovieAdapter[],
          reviews: [] as ReviewAdapter[],
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

export const getMovieById = createSelector(
  [(state) => state.data.movies.entities, (_, id: string) => id],
  (entities, id): MovieAdapter | undefined => {
    return entities[id];
  }
);

export const getReviewById = createSelector(
  [(state) => state.data.reviews.entities, (_, id: string) => id],
  (entities, id): ReviewAdapter | undefined => {
    return entities[id];
  }
);

export const getMovieByReviewId = createSelector(
  [(state) => state.data.movies.entities, (_, reviewId: string) => reviewId],
  (entities, id): MovieAdapter | undefined => {
    const movie = Object.values(entities).find((movie) =>
      (movie as MovieAdapter).movieReviewsByMovieId.some(
        (review) => review == id
      )
    ) as MovieAdapter;
    if (!movie) {
      return undefined;
    }
    return movie;
  }
);

export const getReviewsIdsByMovieId = createSelector(
  [(state) => state.data.reviews.entities, (_, movieId: string) => movieId],
  (entities, id): string[] | undefined => {
    return Object.values(entities)
      .filter((r) => (r as ReviewAdapter).movieId === id)
      .map((r) => (r as ReviewAdapter).id) as string[];
  }
);

export const getMovieAverageRating = createSelector(
  [(state) => state.data.reviews.entities, (_, movieId: string) => movieId],
  (entities, id): number | null => {
    const reviewsByMovie = Object.values(entities).filter(
      (r) => (r as ReviewAdapter).movieId === id
    ) as ReviewAdapter[];

    if (!reviewsByMovie.length) {
      return null;
    }

    return (
      reviewsByMovie.reduce((acc, r) => acc + r.rating, 0) /
      reviewsByMovie.length
    );
  }
);

export const { actions } = slice;
export type SliceAction = typeof actions;
export default slice.reducer;
