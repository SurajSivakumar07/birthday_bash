import React from "react";
import Button from "@mui/material/Button";
import "./proces.css";
export default function Proces() {
  return (
    <>
      <div className="process-wrap">
        <div className="pending">
          <Button variant="outlined">Pending</Button>
        </div>
        <div className="upcoming">
          <Button variant="outlined">UpComing</Button>
        </div>
        {/* <div className="pending">
          <Button variant="outlined">Add Theme</Button>
        </div> */}
        <div className="upcoming">
          <Button variant="outlined">Add Food</Button>
        </div>
        <div className="upcoming">
          <Button variant="outlined">Add Venue</Button>
        </div>
      </div>
    </>
  );
}
