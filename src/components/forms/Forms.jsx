import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./forms.css";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProducts } from "../../Redux/actions/action";

export default function Forms() {
  const navigate = useNavigate();

  const [people, setPeople] = React.useState("");
  const [addition, setAddition] = React.useState("");
  const [duration, setDuration] = React.useState("");

  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div className="forms">
        <Typography variant="h6" gutterBottom className="derails---s">
          <h1>Enter Details</h1>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardName"
              label="Number of people attending the function"
              fullWidth
              autoComplete="cc-name"
              variant="standard"
              onChange={(e) => {
                setPeople(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              label="Number of people requried food"
              fullWidth
              autoComplete="cc-number"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              label="Duration"
              fullWidth
              autoComplete="cc-number"
              variant="standard"
              onChange={(e) => {
                setDuration(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <textarea
              placeholder="Enter addition details about food"
              onChange={(e) => {
                setAddition(e.target.value);
              }}
            ></textarea>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                dispatch(
                  setProducts({
                    people: people,
                    addition: addition,
                    duration: duration,
                  })
                );
                navigate("/profile");
              }}
            >
              Book Now
            </Button>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
