import React, { createContext, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
  isLoggedIn: false,
  user: null
};

function authReducer(state, action) {

  switch (action.type) {

    case "LOGIN":
      return {
        isLoggedIn: true,
        user: { name: action.payload }
      };

    case "LOGOUT":
      return {
        isLoggedIn: false,
        user: null
      };

    default:
      return state;
  }
}

export const AuthProvider = ({ children }) => {

  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};