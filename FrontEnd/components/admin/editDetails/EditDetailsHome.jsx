import React, { useState } from "react";
import "./editDetails.css";
import EditVenue from "./EditVenue";
import EditTheme from "./EditTheme";
import EditMenu from "./EditMenu";
import { Button } from "@mui/material";

export default function EditDetailsHome() {
  const [venue, setVenue] = useState(false);
  const [theme, setTheme] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="editDetails-wrap">
        <ul>
          <Button
            onClick={() => {
              setVenue(true);
              setTheme(false);
              setMenu(false);
            }}
          >
            Venue
          </Button>
          <Button
            onClick={() => {
              setVenue(false);
              setTheme(true);
              setMenu(false);
            }}
          >
            Theme
          </Button>
          <Button
            onClick={() => {
              setVenue(false);
              setTheme(false);
              setMenu(true);
            }}
          >
            Menu
          </Button>
        </ul>
      </div>

      {venue ? <EditVenue /> : ""}
      {theme ? <EditTheme /> : ""}
      {menu ? <EditMenu /> : ""}
      {/* <EditMenu /> */}

      {}
    </>
  );
}
