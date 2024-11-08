import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loaderReducer from "../reducers/loaderSlice";
import successMessageSlice from "../reducers/successMessageSlice";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["loader","success"],
};

const rootReducer = combineReducers({
  loader: loaderReducer,
  success: successMessageSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export const persistor = persistStore(store);

export default store;
