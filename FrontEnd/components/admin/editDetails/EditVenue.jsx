import Card from "@mui/material/Card";
import React from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { displayFruitsAction } from "../../../Redux/actions/action";
import { handleDelete } from "./deleteFunction";
import EditOption from "./EditOption";

export default function EditVenue() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [venue, setVenue] = useState([]);

  useEffect(() => {
    async function getData() {
      axios.get("http://localhost:8081/getDetails").then((res) => {
        res.data.filter((items) => {
          let named = "venue";
          if (items.cate === "venue") {
            dispatch(displayFruitsAction(items));
          }
        });
      });
    }

    getData();
  }, []);
  console.log(venue);

  const prod = useSelector((state) => state.displayFruits.prod);
  console.log(prod);
  const [edit, setEdit] = React.useState(false);
  const [items, setItems] = React.useState("hello");

  return (
    <>
      {edit ? <EditOption items={items} setEdit={setEdit} /> : ""}

      <div className="themes-container">
        <div className="themes-wrap">
          {prod.map((items) => (
            <>
              <div className="Something-">
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="194"
                    image={items.description}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      <h1> Name :{items.name}</h1>
                      <h1>Price : {items.price}</h1>
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <Button
                      variant="outlined"
                      onClick={() => handleDelete(items.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        setItems(items);
                        setEdit(true);
                      }}
                    >
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
