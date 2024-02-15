import React, { useEffect } from "react";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { displayFruitsAction } from "../../../Redux/actions/action";

export default function AddThemes() {
  useEffect(() => {
    async function getData() {
      axios.get("http://localhost:8081/getDetails").then((res) => {
        res.data.filter((items) => {
          let named = "venue";
          if (items.cate === "venue") {
            dispatch(displayFruitsAction(items));
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
  const dispatch = useDispatch();

  const prod = useSelector((state) => state.displayFruits.prod);
  console.log(prod);
  return (
    <>
      <div className="themes-container">
        <div className="title-centre-">
          <div className="title-them">
            <h1>Edit</h1>
          </div>
          <div className="titile-searchBar">{/* <SearchBar /> */}</div>
        </div>
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
                      onClick={() => {
                        localStorage.setItem("name", items.name);
                        localStorage.setItem("img", items.description);

                        axios.delete(
                          `http://localhost:8081/deleteData/${items.id}`
                        );

                        window.location.reload();
                      }}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        localStorage.setItem("name", items.name);
                        localStorage.setItem("img", items.description);
                        navigate("/themes");
                      }}
                    >
                      Edit
                    </Button>
                  </CardActions>
                  <Collapse timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>Method:</Typography>
                      <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add
                        saffron and set aside for 10 minutes.
                      </Typography>
                      <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large,
                        deep skillet over medium-high heat. Add chicken, shrimp
                        and chorizo, and cook, stirring occasionally until
                        lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo
                        in the pan. Add pimentón, bay leaves, garlic, tomatoes,
                        onion, salt and pepper, and cook, stirring often until
                        thickened and fragrant, about 10 minutes. Add saffron
                        broth and remaining 4 1/2 cups chicken broth; bring to a
                        boil.
                      </Typography>
                      <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with
                        artichokes and peppers, and cook without stirring, until
                        most of the liquid is absorbed, 15 to 18 minutes. Reduce
                        heat to medium-low, add reserved shrimp and mussels,
                        tucking them down into the rice, and cook again without
                        stirring, until mussels have opened and rice is just
                        tender, 5 to 7 minutes more. (Discard any mussels that
                        don&apos;t open.)
                      </Typography>
                      <Typography>
                        Set aside off of the heat to let rest for 10 minutes,
                        and then serve.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
