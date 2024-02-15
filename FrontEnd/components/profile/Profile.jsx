import React, { useEffect, useState } from "react";
import axios from "axios";

import "./profile.css";

export default function Profile() {
  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(false);
  const [menue, setMenue] = React.useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("http://localhost:8081/booking");
        const filteredItems = response.data.filter(
          (item) => item.userId === localStorage.getItem("id")
        );
        setMenue((prevMenu) => [...prevMenu, ...filteredItems]);
        // setMenue([filteredItems]);

        console.log(menue);

        setLoading(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, []);

  return loading ? (
    <div className="profile-wrap" id="profile-wrap">
      <div>
        <div>
          <center>
            <h1 id="s-title">MY BOOKINGS</h1>
          </center>
        </div>

        <div className="bookings">
          {menue.map((item, index) => (
            <div className="booking" key={index}>
              <img src={item.img} />
              <p>Venue: {item.venue}</p>
              <p>Theme: {item.theme}</p>
              <p>Number of People: {item.people} </p>
              <p>Duration: {item.duration} hrs</p>
              <p>Addition: {item.addOn}</p>
              <p>Status: {item.invitation}</p>
            </div>
          ))}
        </div>
        {/* <div className="status--">
          <p>Status: Pending</p>
        </div> */}
      </div>
    </div>
  ) : (
    "Loading..."
  );
}
