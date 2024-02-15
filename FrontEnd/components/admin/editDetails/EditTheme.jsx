import * as React from "react";

import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";

import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";

import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../Redux/actions/action";
import { useNavigate } from "react-router-dom";
import { displayFruits } from "../../../Redux/reducer/Product_reducer";
import axios from "axios";
import { handleDelete } from "./deleteFunction";
export default function EditTheme() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function getData() {
      axios.get("http://localhost:8081/getDetails").then((res) => {
        res.data.filter((items) => {
          if (items.cate === "theme") {
            dispatch(setProducts(items));
          }
          // if (named.localeCompare(items.cate) == "true") {
          //   dispatch(setProducts(items));

          //   setVenue([...venue, items]);
          // }
        });
      });
    }

    getData();
  }, []);
  const prod = useSelector((state) => state.allProducts.product);
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
                      This impressive paella is a perfect party dish and a fun
                      meal to cook together with your guests. Add 1 cup of
                      frozen peas along with the mussels, if you like.
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
