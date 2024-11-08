import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",

  initialState: {
    isVisible: false,
    message: "",
    isBoxVisible: false,
    boxMessage: "",
  },

  reducers: {
    showLoading: (state, action) => {
      state.isVisible = action.payload.isVisible;
      state.message = action.payload.message;
    },

    hideLoading: (state) => {
      state.isVisible = false;
      state.message = "";
    },

    setMessage: (state, action) => {
      state.message = action.payload;
    },

    showLoadingBox: (state, action) => {
      state.isBoxVisible = action.payload.isBoxVisible;
      state.boxMessage = action.payload.boxMessage;
    },

    hideLoadingBox: (state) => {
      state.isBoxVisible = false;
      state.boxMessage = "";
    },

    setBoxMessage: (state, action) => {
      state.boxMessage = action.payload;
    },
  },
});

export const {
  showLoading,
  hideLoading,
  setMessage,
  showLoadingBox,
  hideLoadingBox,
  setBoxMessage,
} = loaderSlice.actions;

export default loaderSlice.reducer;
