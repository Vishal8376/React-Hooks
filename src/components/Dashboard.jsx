import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {

  const { state, dispatch } = useContext(AuthContext);
   

  if (!state.isLoggedIn) return null;

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div style ={{color : "black"}}>
      Dashboard   <br /> <br />
      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;