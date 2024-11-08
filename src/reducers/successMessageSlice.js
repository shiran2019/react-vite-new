import { createSlice } from "@reduxjs/toolkit";

const successMessageSlice = createSlice({
  name: "successMessage",

  initialState: {
    isVisible: false,
    message: "",
    type: "",
  },

  reducers: {
    showMessage: (state, action) => {
      state.isVisible = action.payload.isVisible;
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
  },
});

export const { showMessage } = successMessageSlice.actions;

export default successMessageSlice.reducer;
