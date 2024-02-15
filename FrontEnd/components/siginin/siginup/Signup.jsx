import React, { useState, useContext } from "react";
import "./auth.css";
import axios from "axios";
import { UserContext } from "../../userContexts/contexts";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [pop, setPop] = useContext(UserContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [sucess, setSucess] = useState(0);

  const navigation = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    async function getData() {
      let data = await axios.post(
        "http://localhost:8081/api/v1/auth/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );
      const res = setSucess(data.status);
      const dat = await axios.get("http://localhost:8081/api/v1/auth/details");

      dat.data.filter((items) => {
        if (items.email === formData.email) {
          localStorage.setItem("id", items.id);

          setLoading(true);
        }
      });
    }

    getData();

    if (sucess === 200) {
      setPop(true);
      localStorage.setItem("name", formData.name);
      localStorage.setItem("loggedIn", true);
      navigation("/");
    }

    // You can handle form submission here
    console.log(formData);
  };

  return (
    <>
      <div className="login">
        <div className="login-wrap">
          <h1>Signup</h1>
        </div>

        <form className="fromInput" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <br />

          <input type="submit" id="login-btn" />
        </form>
        <Link to="/login">Already have an account? Login</Link>
      </div>
    </>
  );
}
