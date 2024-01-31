import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../userContexts/contexts";
export default function Signin() {
  const [pop, setPop] = useContext(UserContext);
  const [name, setName] = useState("");
  return (
    <>
      <div className="login">
        <div className="login-wrap">
          <h1>SignIn</h1>

          {/* <h1 onClick={() => setSignup(false)}>
            <i class="fa-regular fa-circle-xmark"></i>
          </h1> */}
        </div>

        <form className="fromInput">
          <input
            type="text"
            placeholder="Enter your Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
          <input type="email" placeholder="Enter your email" required />
          <br></br>
          <input type="password" placeholder="Enter your password" required />
          <br></br>

          <input
            type="submit"
            id="login-btn"
            onClick={(e) => {
              e.preventDefault();
              console.log("hello");
              setPop(true);
              localStorage.setItem("name", name);

              localStorage.setItem("loggedIn", true);
            }}
          />
        </form>

        <Link to="/siginup">Dont have an acoount?</Link>
      </div>
    </>
  );
}
