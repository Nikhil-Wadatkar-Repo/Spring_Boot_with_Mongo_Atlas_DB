import React, { useContext } from "react";
import { MyContext } from "./MyContext";

function Login() {
  let center = {
    padding: "70px 0",
    border: "3px solid green",
    textAlign: "center",
  };
  const contextObject = useContext(MyContext);
  return (
    <div style={{ backgroundColor: "greenyellow" }}>
      <div
        className="row center"
        style={{ height: "100vh", backgroundColor: "pink" }}
      >
        <div className="col">DDD</div>
        <div className="col">DDD</div>
        <div className="col">
          Login Here
          <button onClick={(e) => contextObject.setIsLoggedIn(true)}>
            Login
          </button>
        </div>
        <div className="col">DDD</div>
        <div className="col">DDD</div>
      </div>
    </div>
  );
}

export default Login;
