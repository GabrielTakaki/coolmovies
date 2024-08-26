import movieReducer from "../../src/redux/slices/moviesSlice";
import userReducer from "../../src/redux/slices/userSlice";

const initialState = {
  ids: [],
  entities: {},
  isRetrieving: false,
};

const moviesData = {
  data: {
    allMovies: {
      nodes: [
        {
          id: "70351289-8756-4101-bf9a-37fc8c7a82cd",
          imgUrl:
            "https://upload.wikimedia.org/wikipedia/en/d/d4/Rogue_One%2C_A_Star_Wars_Story_poster.png",
          movieDirectorId: "c103cc08-ed39-4a3c-a1f3-0f431c07539e",
          movieReviewsByMovieId: {
            nodes: [
              {
                id: "335f0ff2-7f96-413f-8d26-6224039356c4",
                __typename: "MovieReview",
              },
              {
                id: "5750da72-238b-44b3-9a92-02e3543861c4",
                __typename: "MovieReview",
              },
            ],
            __typename: "MovieReviewsConnection",
            nodeId:
              "WyJtb3ZpZXMiLCI3MDM1MTI4OS04NzU2LTQxMDEtYmY5YS0zN2ZjOGM3YTgyY2QiXQ==",
          },
          releaseDate: "2016-12-16",
          title: "Rogue One: A Star Wars Story",
          userByUserCreatorId: {
            id: "7b4c31df-04b3-452f-a9ee-e9f8836013cc",
            name: "Marle",
            nodeId:
              "WyJ1c2VycyIsIjdiNGMzMWRmLTA0YjMtNDUyZi1hOWVlLWU5Zjg4MzYwMTNjYyJd",
            __typename: "User",
            userCreatorId: "7b4c31df-04b3-452f-a9ee-e9f8836013cc",
          },
          __typename: "Movie",
        },
        {
          id: "b8d93229-e02a-4060-9370-3e073ada86c3",
          imgUrl:
            "https://images-na.ssl-images-amazon.com/images/I/81aA7hEEykL.jpg",
          movieDirectorId: "7467db60-d506-4f1a-b5b4-7f2620d61669",
          movieReviewsByMovieId: {
            nodes: [
              {
                id: "3a295d43-da93-4994-8211-4bbccd59d06b",
                __typename: "MovieReview",
              },
              {
                id: "9229d463-f0a5-4d6a-ab26-2e140dbecc31",
                __typename: "MovieReview",
              },
              {
                id: "e8edc53a-29cf-4470-8351-ed22cc144a3f",
                __typename: "MovieReview",
              },
            ],
            __typename: "MovieReviewsConnection",
            nodeId:
              "WyJtb3ZpZXMiLCJiOGQ5MzIyOS1lMDJhLTQwNjAtOTM3MC0zZTA3M2FkYTg2YzMiXQ==",
          },
          releaseDate: "1977-05-25",
          title: "Star Wars: A New Hope",
          userByUserCreatorId: {
            id: "5f1e6707-7c3a-4acd-b11f-fd96096abd5a",
            name: "Chrono",
            nodeId:
              "WyJ1c2VycyIsIjVmMWU2NzA3LTdjM2EtNGFjZC1iMTFmLWZkOTYwOTZhYmQ1YSJd",
            __typename: "User",
            userCreatorId: "5f1e6707-7c3a-4acd-b11f-fd96096abd5a",
          },
          __typename: "Movie",
        },
      ],
      __typename: "MoviesConnection",
    },
  },
};

const normalizedState = {
  isRetrieving: false,
  ids: [
    "70351289-8756-4101-bf9a-37fc8c7a82cd",
    "b8d93229-e02a-4060-9370-3e073ada86c3",
  ],
  entities: {
    "70351289-8756-4101-bf9a-37fc8c7a82cd": {
      id: "70351289-8756-4101-bf9a-37fc8c7a82cd",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/d/d4/Rogue_One%2C_A_Star_Wars_Story_poster.png",
      movieDirectorId: "c103cc08-ed39-4a3c-a1f3-0f431c07539e",
      movieReviewsByMovieId: [
        "335f0ff2-7f96-413f-8d26-6224039356c4",
        "5750da72-238b-44b3-9a92-02e3543861c4",
      ],
      releaseDate: "2016-12-16",
      title: "Rogue One: A Star Wars Story",
      userByUserCreatorId: {
        __typename: "User",
        id: "7b4c31df-04b3-452f-a9ee-e9f8836013cc",
        name: "Marle",
        nodeId:
          "WyJ1c2VycyIsIjdiNGMzMWRmLTA0YjMtNDUyZi1hOWVlLWU5Zjg4MzYwMTNjYyJd",
        userCreatorId: "7b4c31df-04b3-452f-a9ee-e9f8836013cc",
      },
      __typename: "Movie",
    },
    "b8d93229-e02a-4060-9370-3e073ada86c3": {
      id: "b8d93229-e02a-4060-9370-3e073ada86c3",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/81aA7hEEykL.jpg",
      movieDirectorId: "7467db60-d506-4f1a-b5b4-7f2620d61669",
      movieReviewsByMovieId: [
        "3a295d43-da93-4994-8211-4bbccd59d06b",
        "9229d463-f0a5-4d6a-ab26-2e140dbecc31",
        "e8edc53a-29cf-4470-8351-ed22cc144a3f",
      ],
      releaseDate: "1977-05-25",
      title: "Star Wars: A New Hope",
      userByUserCreatorId: {
        __typename: "User",
        id: "5f1e6707-7c3a-4acd-b11f-fd96096abd5a",
        name: "Chrono",
        nodeId:
          "WyJ1c2VycyIsIjVmMWU2NzA3LTdjM2EtNGFjZC1iMTFmLWZkOTYwOTZhYmQ1YSJd",
        userCreatorId: "5f1e6707-7c3a-4acd-b11f-fd96096abd5a",
      },
      __typename: "Movie",
    },
  },
};

describe("fetchMovies action", () => {
  it("should set isFetching to true", () => {
    const state = movieReducer(initialState, {
      type: "movies/fetchMovies",
    });

    expect(state.isRetrieving).toBe(true);
  });
});

describe("setMovies action", () => {
  it("should normalize the movies when sent correctly", () => {
    const state = movieReducer(initialState, {
      type: "movies/setMovies",
      payload: moviesData.data.allMovies,
    });

    expect(state).toEqual(normalizedState);
  });
});

describe("clearMovies slice", () => {
  it("should successfully clear the state when clearMovies actions called", () => {
    const normalizeRequestState = movieReducer(initialState, {
      type: "movies/setMovies",
      payload: moviesData.data.allMovies,
    });
    expect(normalizeRequestState).toEqual(normalizedState);

    const clearState = movieReducer(normalizeRequestState, {
      type: "movies/clearMovies",
      payload: moviesData.data.allMovies,
    });

    expect(clearState).toEqual(initialState);
  });
});
