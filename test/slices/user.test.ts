import userReducer from "../../src/redux/slices/userSlice";

const initialState = {
  id: "",
  name: "",
  isCreating: false,
  isFetching: false,
};

describe("fetchCurrentUser action", () => {
  it("should set isFetching to true", () => {
    const state = userReducer(initialState, {
      type: "user/fetchCurrentUser",
    });

    expect(state.isFetching).toBe(true);
  });
});

describe("setUser slice", () => {
  it("should successfully set the payload user to the state", () => {
    const state = userReducer(initialState, {
      type: "user/setUser",
      payload: {
        id: "2355632",
        name: "Carl",
      },
    });

    expect(state.isFetching).toBe(false);
    expect(state.isCreating).toBe(false);
    expect(state.name).toBe("Carl");
    expect(state.id).toBe("2355632");
  });
});
