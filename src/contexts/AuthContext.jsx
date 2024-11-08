import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [cookie, setCookie] = useState(null);
  const [csrf, setCSRF] = useState(null);

  const login = (token, cookie) => {
    setToken(token);
    setCookie(cookie);
  };

  const saveCSRFToken = (csrfToken) => {
    setCSRF(csrfToken);
  };

  return (
    <AuthContext.Provider value={{ token, cookie, csrf, saveCSRFToken, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
