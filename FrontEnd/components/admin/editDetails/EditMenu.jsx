import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { handleDelete } from "./deleteFunction";
import EditOption from "./EditOption";

export default function EditMenu() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [menu, setMenu] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("http://localhost:8081/getDetails");
        const filteredItems = response.data.filter(
          (item) => item.cate === "menu"
        );
        setMenue((prevMenu) => [...prevMenu, ...filteredItems]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, []);

  const prod = useSelector((state) => state.displayVeggies.veggies);

  const [edit, setEdit] = React.useState(false);

  const [items, setItems] = React.useState("hello");
  return (
    <>
      {edit ? <EditOption items={items} setEdit={setEdit} /> : ""}

      <div className="themes-container">
        <div className="themes-wrap">
          {menu.map((item) => (
            <div className="Something-" key={item.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="194"
                  image={item.description}
                  alt="Menu item"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <h1>Description: {item.name}</h1>
                    Price: {item.price}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Button
                    variant="outlined"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      setItems(item);
                      setEdit(true);
                    }}
                  >
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
