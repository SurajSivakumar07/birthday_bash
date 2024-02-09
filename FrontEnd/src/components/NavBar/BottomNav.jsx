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
              {pop ? (
                <Link to="/profile">Profile</Link>
              ) : (
                <Link to="/sigin">Sigin</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
