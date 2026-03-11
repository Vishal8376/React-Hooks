import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {

  const { state, dispatch } = useContext(AuthContext);

  if (state.isLoggedIn) return null;

  const handleLogin = () => {
    dispatch({
      type: "LOGIN",
      payload: "Vishal"
    });
  };

  return (
      <button onClick={handleLogin}>
        Login
      </button>
  );
}

export default Login;