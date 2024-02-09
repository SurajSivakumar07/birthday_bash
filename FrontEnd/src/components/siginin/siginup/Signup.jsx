import React, { useContext } from "react";
import "./auth.css";
import { UserContext } from "../../userContexts/contexts";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <>
      <div className="login">
        <div className="login-wrap">
          <h1>Signup</h1>
        </div>

        <form className="fromInput">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="email" placeholder="Mobile Number " required />
          <br></br>
          <input type="password" placeholder="Password" required />
          <br></br>

          <input type="submit" id="login-btn" />
        </form>
        <Link to="/sigin">Already have an account!login</Link>
      </div>
    </>
  );
}
