import React from "react";

import "./sidebar.css";

export default function SideBar(props) {
  return (
    <>
      <div className="side-bar">
        <ul>
          <li
            onClick={() => {
              props.setBooking(false);
              props.setEvents(false);
              props.setEdit(false);

              props.setPending(true);
            }}
          >
            Pending
          </li>
          <li
            onClick={() => {
              props.setBooking(true);
              props.setEvents(false);
              props.setEdit(false);

              props.setPending(false);
            }}
          >
            Booked
          </li>
          <li
            onClick={() => {
              props.setBooking(false);
              props.setEvents(true);
              props.setEdit(false);

              props.setPending(false);
            }}
          >
            AddDetails
          </li>
          <li
            onClick={() => {
              props.setBooking(false);
              props.setEvents(false);
              props.setEdit(true);

              props.setPending(false);
            }}
          >
            EditDetails
          </li>
        </ul>
      </div>
    </>
  );
}
