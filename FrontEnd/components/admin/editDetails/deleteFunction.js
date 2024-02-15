import axios from "axios";

export const handleDelete = (id) => {
  axios
    .delete(`http://localhost:8081/deleteDetails/${id}`)
    .then((res) => {
      console.log("Item deleted successfully");
      // You may want to update the state here to reflect the deletion
    })
    .catch((error) => {
      console.error("Error deleting item:", error);
    });
};
