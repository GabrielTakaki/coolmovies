import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  initialState: {
    userId: "",
    isCreating: false,
  },
  name: "user",
  reducers: {
    createUser: (state, action: PayloadAction<{ name: string }>) => {
      state.isCreating = true;
    },
    setUser: (state, action) => {
      state.userId = action.payload.id;
      state.isCreating = false;
    },
  },
});

export const { actions: userActions } = userSlice;
export type SliceAction = typeof userActions;

export default userSlice.reducer;
