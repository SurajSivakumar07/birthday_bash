import axios from "axios";
import React, { useState } from "react";
import "./addData.css";
export default function AddData(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

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
    // Do something with the form data, like submitting it to a backend server
    axios
      .post("http://localhost:8081/postDetails", {
        name: name,
        description: image,
        price: price,
        cate: category,
      })
      .then((res) => alert(res.data));
    setName("");
    setImage("");
    setPrice("");
    setCategory("");
  };

  return (
    <>
      <div className="fomr">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter the name"
          />
          <br></br>

          <label htmlFor="image">Image URL:</label>
          <input
            id="image"
            type="text"
            value={image}
            onChange={handleImageChange}
            placeholder="Enter image"
          />
          <br></br>

          <label htmlFor="price">Price:</label>
          <input
            id="price"
            type="text"
            value={price}
            onChange={handlePriceChange}
            placeholder="Enter the price"
          />
          <br></br>

          <label htmlFor="category">Category:</label>
          <input
            id="category"
            type="text"
            value={category}
            onChange={handleCategoryChange}
            placeholder="Enter the category"
          />
          <br></br>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
