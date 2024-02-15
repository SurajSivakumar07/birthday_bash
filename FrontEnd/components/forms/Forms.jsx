import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProducts } from "../../Redux/actions/action";
import axios from "axios";

import "./forms.css";

export default function Forms() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // State variables for each field
  const [people, setPeople] = useState("");
  const [requiredFood, setRequiredFood] = useState("");
  const [duration, setDuration] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");

  const handlePeopleChange = (event) => {
    setPeople(event.target.value);
  };

  const handleRequiredFoodChange = (event) => {
    setRequiredFood(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleAdditionalDetailsChange = (event) => {
    setAdditionalDetails(event.target.value);
  };

  const [sucess, setSucess] = useState(0);
  const handleSubmit = () => {
    axios
      .post("http://localhost:8081/booking", {
        userId: localStorage.getItem("id"),
        img: localStorage.getItem("img"),
        venue: localStorage.getItem("name"),
        theme: localStorage.getItem("theme"),
        addOn: additionalDetails,
        menu: localStorage.getItem("menu"),
        people: people,
        cakeReq: "string",
        duration: duration,
        invitation: "pending",
        staus: "pending",
        data: "2024-02-14T12:45:46.855Z",
      })
      .then((res) => {
        console.log(res.status);
      });

    setTimeout(() => {
      navigate("/profile");
    }, 1000);
  };

  return (
    <div className="forms">
      <Typography variant="h6" gutterBottom className="derails---s">
        <h1>Enter Details</h1>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="people"
            label="Number of people attending the function"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={people}
            onChange={handlePeopleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="requiredFood"
            label="Number of people required food"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={requiredFood}
            onChange={handleRequiredFoodChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="duration"
            label="Duration"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={duration}
            onChange={handleDurationChange}
          />
        </Grid>
        <Grid item xs={12}>
          <textarea
            id="additionalDetails"
            placeholder="Enter additional details about food"
            value={additionalDetails}
            onChange={handleAdditionalDetailsChange}
          ></textarea>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Book Now
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
