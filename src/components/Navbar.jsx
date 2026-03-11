import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {

  const { state } = useContext(AuthContext);

  return (
    <div style={{ background: "#ffffff", padding: "10px"  , color:"black" }}>
      {state.isLoggedIn ? (
        <p>Welcome, {state.user.name}</p>
      ) : (
        <p>Please Login </p>
      )}
    </div>
  );
}

export default Navbar;