import { useState } from "react";
import router from "./routes";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import store from "./app/store";
import { Provider } from "react-redux";
import SuccessMessage from "./components/SuccessMessage/SuccessMessage";
import LoadingAnimation from "./components/LoadingAnimation/LoadingAnimation";
import ThemeProvider from "./theme";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
      <Provider store={store}>
        <AuthProvider>
          <ThemeProvider>
            <SuccessMessage />
            <LoadingAnimation />
            <RouterProvider router={router} />
          </ThemeProvider>
        </AuthProvider>
      </Provider>
    </>
  );
}

export default App;
