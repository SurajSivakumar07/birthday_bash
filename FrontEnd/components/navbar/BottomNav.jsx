import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../userContexts/contexts";

export default function BottomNav() {
  const [pop, setPop] = useContext(UserContext);
  return (
    <>
      <div className="bottom-nav-wrap">
        <div className="bottom-nav-items">
          <ul>
            <li>
              <Link to="/venue">Venue</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              {localStorage.getItem("loggedIn") === "true" ? (
                <p style={{ color: "black" }}>
                  Hii! {localStorage.getItem("name")}
                </p>
              ) : (
                <Link to="/login">Sigin</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
