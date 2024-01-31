import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

import "./profile.css";
import { useSelector } from "react-redux";

export default function Profile() {
  const data = useSelector((state) => state.allProducts.product);
  console.log(data);
  return (
    <div className="profile-wrap" id="profile-wrap">
      <div>
        <div>
          <center>
            <h1 id="s-title">MY BOOKINGS</h1>
          </center>
        </div>

        <div className="bookings">
          <div className="booking">
            <img src={localStorage.getItem("img")} />
            <p>Location:{localStorage.getItem("location")}</p>
            <p>Theme:{localStorage.getItem("theme")}</p>{" "}
            <p>{localStorage.getItem("menus")}</p>
            {data.map((items) => (
              <>
                <p>Number of People:{items.people}</p>
                <p>Duration:{items.duration}</p>
                <p>Addition:{items.addition}</p>
              </>
            ))}
          </div>
        </div>
        <div className="status--">
          {" "}
          <p>Status: Pending</p>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="Booking">
  <h1>Bookings Details</h1>
  <p>{localStorage.getItem("location")}</p>
  <p>{localStorage.getItem("theme")}</p>{" "}
  <p>{localStorage.getItem("menus")}</p>
  {data.map((items) => (
    <>
      <p>Number of People:{items.people}</p>
      <p>Duration:{items.addition}</p>
      <p>Addition:{items.addition}</p>
    </>
  ))}
</div> */
}
