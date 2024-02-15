import React, { useState } from "react";

import Pending from "./peding/Pending";
import "./dashboard.css";

import SideBar from "./SideBar/SideBar";
import AddData from "../addData/AddData";

import Booked from "./booked/Booked";

import EditDetailsHome from "../editDetails/EditDetailsHome";
export default function DashBoard() {
  const [pending, setPending] = useState(false);
  const [booked, setBooking] = useState(false);
  const [events, setEvents] = useState(false);
  const [edit, setEdit] = useState(false);
  return (
    <>
      <div className="dash-board-wrap">
        <div className="dash-board-title">
          <h1>Dashboard</h1>
        </div>

        <SideBar
          pending={pending}
          setPending={setPending}
          setBooking={setBooking}
          setEvents={setEvents}
          setEdit={setEdit}
        />

        {/* {url[url.length - 3] === "pending" ? <Pending /> : " "}x */}

        {pending ? <Pending /> : ""}

        {booked ? <Booked /> : ""}

        {events ? <AddData /> : ""}
        {edit ? <EditDetailsHome /> : ""}

        {/* <Proces />
         */}

        {/* <AddThemes /> */}
      </div>
    </>
  );
}
