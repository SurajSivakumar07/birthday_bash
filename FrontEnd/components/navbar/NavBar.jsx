import React, { useContext, useEffect, useState } from "react";

import "./navbar.css";
import { TurnLeft } from "@mui/icons-material";
import { useFetcher } from "react-router-dom";
import BottomNav from "./BottomNav";
import DropDownNav from "./dropdown/DropDownNav";

import bg from "../../assets/birthdayImagesFamily.jpg";
import Signup from "../siginin/siginup/Signup";
import { UserContext } from "../userContexts/contexts";
import Signin from "../siginin/siginup/Signin";

export default function NavBar() {
  const [trigger, setTrigger] = useState(false);

  const [signupPop, setSignUpPop] = useState(false);

  const [pop, setPop] = useContext(UserContext);

  return (
    <>
      <div className="nav-bar-wrap" id="wrap">
        <div className="nav-bar-contents">
          <div className="top-nav-wrap">
            <div className="nav-section">
              <h3>Family</h3>
              <h3>Friends</h3>
              <h3>Couples</h3>
            </div>

            <div className="title">
              {/* <h3>BIRTHDAY BASHHH</h3> */}
              <h3>Party Duty</h3>
            </div>
            <div className="popp--">
              <div>
                {localStorage.getItem("loggedIn") ? (
                  <i
                    class="fa-regular fa-user"
                    onClick={() => {
                      if (trigger) {
                        setTrigger(false);
                      } else {
                        setTrigger(true);
                      }
                    }}
                  ></i>
                ) : (
                  " "
                )}
              </div>
              {/* <div style={{ marginLeft: 40 }}>
                {pop ? localStorage.getItem("name") : " "}
              </div> */}
            </div>
            {/* <div
              className="profile"
              onClick={() => {
                if (trigger) {
                  setTrigger(false);
                } else {
                  setTrigger(true);
                }
              }}
            >
              {pop ? localStorage.getItem("name") : " "}
            </div> */}
          </div>
        </div>
        <div className="dropdown-nav">
          <DropDownNav trigger={trigger} setTrigger={setTrigger} />
        </div>

        <div className="vanish-on">
          <BottomNav />
        </div>
      </div>
    </>
  );
}
