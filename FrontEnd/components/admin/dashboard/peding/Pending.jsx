import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import axios from "axios";
import "./pending.css";
import Button from "@mui/material/Button";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Pending() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [booking, setBooking] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const [menu, setMenu] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("http://localhost:8081/booking");
        const filteredItems = response.data.filter(
          (item) => item.invitation === "pending"
        );
        setMenu((prevMenu) => [...prevMenu, ...filteredItems]);
        setLoading(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, []);

  const confrimHandler = (items) => {
    console.log("hello");

    axios
      .put(`http://localhost:8081/booking/${items.id}`, {
        userId: items.userId,
        img: items.img,
        venue: items.venue,
        theme: items.theme,
        addOn: items.addOn,
        menu: items.menu,
        people: items.people,
        cakeReq: items.cakeReq,
        duration: items.duration,
        invitation: "Done",
        staus: "done",
        data: "2024-02-14T19:10:09.135Z",
      })
      .then((res) => console.log(res));

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

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
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Button
                  variant="outlined"
                  onClick={() => confrimHandler(items)}
                >
                  Confirm
                </Button>
              </IconButton>
              <IconButton aria-label="share">
                <Button variant="outlined">Cancel</Button>
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
