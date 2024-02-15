import React, { useContext, useState } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../../userContexts/contexts";
import { AssistWalker, LogoDev } from "@mui/icons-material";

export default function Signin() {
  const [pop, setPop] = useContext(UserContext);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState(0); // Changed initial value to false

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    async function getData() {
      let data = await axios.post(
        "http://localhost:8081/api/v1/auth/authenticate",
        {
          email: formData.email,
          password: formData.password,
        }
      );
      const res = setSuccess(data.status);
      const dat = await axios.get("http://localhost:8081/api/v1/auth/details");

      dat.data.filter((items) => {
        if (items.email === formData.email) {
          localStorage.setItem("id", items.id);

          setLoading(true);
        }
      });
    }

    getData();

    if (success === 200) {
      if (loading) {
        localStorage.setItem("name", formData.name);
        localStorage.setItem("loggedIn", true);
        setSuccess(true); // Update success state
        setPop(true);
        navigation("/");
      }
    } else {
      //   console.log("Sign-in failed");
    }
  };

  return (
    <>
      <div className="login">
        <div className="login-wrap">
          <h1>SignIn</h1>
        </div>

        <form className="fromInput" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <br />
          <input type="submit" id="login-btn" value="Sign In" />
        </form>

        <Link to="/register">
          <button>Don't have an account?</button>
        </Link>
      </div>
    </>
  );
}
