import axios from "axios";
import React, { useEffect, useState } from "react";
import "./editDetails.css";

export default function EditOption(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (props.items) {
      setName(props.items.name || "");
      setImage(props.items.description || "");
      setPrice(props.items.price || "");
      setCategory(props.items.cate || "");
    }
    console.log(props.items);
  }, [props.items]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8081/putDetails/${props.items.id}`, {
        name: name,
        description: image,
        price: price,
        cate: category,
      })
      .then((res) => {
        alert(res.data);
        // Reset form fields after successful submission
        setName("");
        setImage("");
        setPrice("");
        setCategory("");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <div className="form-wrap">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter the name"
        />
        <br />

        <label htmlFor="image">Image URL:</label>
        <input
          id="image"
          type="text"
          value={image}
          onChange={handleImageChange}
          placeholder="Enter image"
        />
        <br />

        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="text"
          value={price}
          onChange={handlePriceChange}
          placeholder="Enter the price"
        />
        <br />

        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          value={category}
          onChange={handleCategoryChange}
          placeholder="Enter the category"
        />
        <br />

        <button type="submit">Submit</button>
        <br />

        <button
          className="cancel-btn"
          onClick={() => {
            window.location.reload();
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
