import React, { useContext } from "react";
import "./dropdown.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../userContexts/contexts";

export default function DropDownNav(props) {
  const [sigupPopUp, setSignup] = useContext(UserContext);

  return props.trigger ? (
    <>
      <div className="drop-down-wrap">
        <div className="drop-down-content">
          <ul>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
            >
              Logout
            </li>

            {/* <li>logout</li> */}
          </ul>
        </div>
      </div>
    </>
  ) : (
    " "
  );
}
