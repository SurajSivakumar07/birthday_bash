import * as React from "react";

import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import axios from "axios";

import Button from "@mui/material/Button";

export default function Booked() {
  const [loading, setLoading] = React.useState(false);

  const [menu, setMenu] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("http://localhost:8081/booking");
        const filteredItems = response.data.filter(
          (item) => item.invitation === "Done"
        );
        setMenu((prevMenu) => [...prevMenu, ...filteredItems]);

        setMenu(response.data);
        setLoading(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, []);

  return loading ? (
    <div className="admin-booking-wrap">
      {menu.map((items) => (
        <div className="inside-wrap">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image={items.img}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                <p>Venue: {items.venue}</p>

                <p>Theme: {items.theme}</p>

                <p>Number of People: {items.people} </p>
                <p>Duration: {items.duration} hrs</p>
                <p>Addition: {items.addOn}</p>
                <p>Inv: {items.invitation}</p>
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <h1>Event Booked</h1>
              </IconButton>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  ) : (
    " Wait its loading"
  );
}
