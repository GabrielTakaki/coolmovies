import reviewReducer from "../../src/redux/slices/reviewsSlice";

const initialState = {
  ids: [],
  entities: {},
  isCreating: false,
  isUpdating: false,
  isRetrieving: false,
};

const reviewsData = {
  data: {
    allMovieReviews: {
      nodes: [
        {
          id: "335f0ff2-7f96-413f-8d26-6224039356c4",
          title: "Best Action Movie Ever",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          movieId: "70351289-8756-4101-bf9a-37fc8c7a82cd",
          nodeId:
            "WyJtb3ZpZV9yZXZpZXdzIiwiMzM1ZjBmZjItN2Y5Ni00MTNmLThkMjYtNjIyNDAzOTM1NmM0Il0=",
          rating: 4,
          userByUserReviewerId: {
            id: "65549e6a-2389-42c5-909a-4475fdbb3e69",
            name: "Ayla",
            __typename: "User",
          },
          userReviewerId: "65549e6a-2389-42c5-909a-4475fdbb3e69",
          __typename: "MovieReview",
        },
        {
          id: "3a295d43-da93-4994-8211-4bbccd59d06b",
          title: "Instant Hit!",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          movieId: "b8d93229-e02a-4060-9370-3e073ada86c3",
          nodeId:
            "WyJtb3ZpZV9yZXZpZXdzIiwiM2EyOTVkNDMtZGE5My00OTk0LTgyMTEtNGJiY2NkNTlkMDZiIl0=",
          rating: 4,
          userByUserReviewerId: {
            id: "65549e6a-2389-42c5-909a-4475fdbb3e69",
            name: "Ayla",
            __typename: "User",
          },
          userReviewerId: "65549e6a-2389-42c5-909a-4475fdbb3e69",
          __typename: "MovieReview",
        },
      ],
    },
  },
};

const normalizedState = {
  ids: [
    "335f0ff2-7f96-413f-8d26-6224039356c4",
    "3a295d43-da93-4994-8211-4bbccd59d06b",
  ],
  entities: {
    "335f0ff2-7f96-413f-8d26-6224039356c4": {
      id: "335f0ff2-7f96-413f-8d26-6224039356c4",
      title: "Best Action Movie Ever",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      movieId: "70351289-8756-4101-bf9a-37fc8c7a82cd",
      nodeId:
        "WyJtb3ZpZV9yZXZpZXdzIiwiMzM1ZjBmZjItN2Y5Ni00MTNmLThkMjYtNjIyNDAzOTM1NmM0Il0=",
      rating: 4,
      userByUserReviewerId: {
        __typename: "User",
        id: "65549e6a-2389-42c5-909a-4475fdbb3e69",
        name: "Ayla",
      },
      userReviewerId: "65549e6a-2389-42c5-909a-4475fdbb3e69",
      __typename: "MovieReview",
    },
    "3a295d43-da93-4994-8211-4bbccd59d06b": {
      id: "3a295d43-da93-4994-8211-4bbccd59d06b",
      title: "Instant Hit!",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      movieId: "b8d93229-e02a-4060-9370-3e073ada86c3",
      nodeId:
        "WyJtb3ZpZV9yZXZpZXdzIiwiM2EyOTVkNDMtZGE5My00OTk0LTgyMTEtNGJiY2NkNTlkMDZiIl0=",
      rating: 4,
      userByUserReviewerId: {
        __typename: "User",
        id: "65549e6a-2389-42c5-909a-4475fdbb3e69",
        name: "Ayla",
      },
      userReviewerId: "65549e6a-2389-42c5-909a-4475fdbb3e69",
      __typename: "MovieReview",
    },
  },
  isCreating: false,
  isUpdating: false,
  isRetrieving: false,
};

describe("fetchReviews action", () => {
  it("should set isRetrieving to true", () => {
    const state = reviewReducer(initialState, {
      type: "reviews/fetchReviews",
    });
    expect(state.isRetrieving).toBe(true);
  });
});

describe("createReview action", () => {
  it("should set isCreating to true", () => {
    const state = reviewReducer(initialState, {
      type: "reviews/createReview",
    });

    expect(state.isCreating).toBe(true);
  });
});

describe("updateReview action", () => {
  it("should set isUpdating to true", () => {
    const state = reviewReducer(initialState, {
      type: "reviews/updateReview",
    });

    expect(state.isUpdating).toBe(true);
  });
});

describe("setReviews action", () => {
  it("should normalize the reviews when sent correctly", () => {
    const state = reviewReducer(initialState, {
      type: "reviews/setReviews",
      payload: reviewsData.data.allMovieReviews,
    });

    expect(state).toEqual(normalizedState);
  });
});

describe("insertOne action", () => {
  it("should normalize the reviews when sent correctly", () => {
    const normalizeRequestState = reviewReducer(initialState, {
      type: "reviews/setReviews",
      payload: reviewsData.data.allMovieReviews,
    });
    expect(normalizeRequestState).toEqual(normalizedState);

    const mergedState = reviewReducer(normalizeRequestState, {
      type: "reviews/insertOne",
      payload: {
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        id: "e8edc53a-29cf-4470-8351-ed22cc144a3f",
        movieId: "b8d93229-e02a-4060-9370-3e073ada86c3",
        nodeId:
          "WyJtb3ZpZV9yZXZpZXdzIiwiZThlZGM1M2EtMjljZi00NDcwLTgzNTEtZWQyMmNjMTQ0YTNmIl0=",
        rating: 5,
        title: "Great Movie",
        userByUserReviewerId: {
          id: "5f1e6707-7c3a-4acd-b11f-fd96096abd5a",
          name: "Chrono",
          __typename: "User",
        },
        userReviewerId: "5f1e6707-7c3a-4acd-b11f-fd96096abd5a",
        __typename: "MovieReview",
      },
    });

    expect(mergedState).toEqual(
      expect.objectContaining({
        ids: [
          "335f0ff2-7f96-413f-8d26-6224039356c4",
          "3a295d43-da93-4994-8211-4bbccd59d06b",
          "e8edc53a-29cf-4470-8351-ed22cc144a3f",
        ],
      })
    );
  });
});

describe("updateOne action", () => {
  it("should normalize the reviews when sent correctly", () => {
    const normalizeRequestState = reviewReducer(initialState, {
      type: "reviews/setReviews",
      payload: reviewsData.data.allMovieReviews,
    });
    expect(normalizeRequestState).toEqual(normalizedState);

    const mergedState = reviewReducer(normalizeRequestState, {
      type: "reviews/updateOne",
      payload: {
        id: "3a295d43-da93-4994-8211-4bbccd59d06b",
        title: "I hated it!",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        movieId: "b8d93229-e02a-4060-9370-3e073ada86c3",
        nodeId:
          "WyJtb3ZpZV9yZXZpZXdzIiwiM2EyOTVkNDMtZGE5My00OTk0LTgyMTEtNGJiY2NkNTlkMDZiIl0=",
        rating: 2,
        userByUserReviewerId: {
          id: "65549e6a-2389-42c5-909a-4475fdbb3e69",
          name: "Ayla",
          __typename: "User",
        },
        userReviewerId: "65549e6a-2389-42c5-909a-4475fdbb3e69",
        __typename: "MovieReview",
      },
    });

    expect(mergedState).toEqual(
      expect.objectContaining({
        entities: expect.objectContaining({
          "3a295d43-da93-4994-8211-4bbccd59d06b": expect.objectContaining({
            title: "I hated it!",
            rating: 2,
          }),
        }),
        ids: [
          "335f0ff2-7f96-413f-8d26-6224039356c4",
          "3a295d43-da93-4994-8211-4bbccd59d06b",
        ],
        isCreating: false,
        isRetrieving: false,
        isUpdating: false,
      })
    );
  });
  it("should do anything if sent an unknown state", () => {
    const normalizeRequestState = reviewReducer(initialState, {
      type: "reviews/setReviews",
      payload: reviewsData.data.allMovieReviews,
    });
    expect(normalizeRequestState).toEqual(normalizedState);

    const mergedState = reviewReducer(normalizeRequestState, {
      type: "reviews/updateOne",
      payload: {
        nodeId:
          "WyJtb3ZpZV9yZXZpZXdzIiwiM2EyOTVkNDMtZGE5My00OTk0LTgyMTEtNGJiY2NkNTlkMDZiIl0=",
        rating: 2,
        userByUserReviewerId: {
          id: "65549e6a-2389-42c5-909a-4475fdbb3e69",
          name: "Ayla",
          __typename: "User",
        },
        userReviewerId: "65549e6a-2389-42c5-909a-4475fdbb3e69",
        __typename: "MovieReview",
      },
    });

    expect(mergedState).toEqual(normalizedState);
  });
});

describe("clearReviews slice", () => {
  it("should successfully clear the state when clearMovies actions called", () => {
    const normalizeRequestState = reviewReducer(initialState, {
      type: "reviews/setReviews",
      payload: reviewsData.data.allMovieReviews,
    });
    expect(normalizeRequestState).toEqual(normalizedState);

    const clearState = reviewReducer(normalizeRequestState, {
      type: "reviews/clearReviews",
    });

    expect(clearState).toEqual(initialState);
  });
});
