import {
  hideLoading,
  hideLoadingBox,
  setMessage,
  showLoading,
  showLoadingBox,
} from "../reducers/loaderSlice";
import store from "./store";

export const showLoadingAnimation = ({ message }) => {
  store.dispatch(
    showLoading({
      isVisible: true,
      message,
    })
  );
};

export const hideLoadingAnimation = () => {
  store.dispatch(hideLoading());
};

export const changeMessage = ({ message }) => {
  store.dispatch(setMessage(message));
};

export const showLoadingBoxAnimation = ({ boxMessage }) => {
  store.dispatch(
    showLoadingBox({
      isBoxVisible: true,
      boxMessage,
    })
  );
};

export const hideLoadingBoxAnimation = () => {
  store.dispatch(hideLoadingBox());
};
