import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  initialState: {
    id: "",
    name: "",
    isCreating: false,
    isFetching: false,
  },
  name: "user",
  reducers: {
    fetchCurrentUser: (state) => {
      state.isFetching = true;
    },
    createUser: (state, action: PayloadAction<{ name: string }>) => {
      state.isCreating = true;
    },
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.isCreating = false;
      state.isFetching = false;
    },
  },
});

export const { actions: userActions } = userSlice;
export type SliceAction = typeof userActions;

export default userSlice.reducer;
