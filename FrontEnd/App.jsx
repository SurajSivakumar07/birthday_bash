import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import "./app.css";

import Home from "./components/home/Home";

import { Routes, Route, Form } from "react-router-dom";

import FriendsHome from "./components/friends/FriendsHome";
import Themes from "./components/themes/Themes";
import { UserContext } from "./components/userContexts/contexts";

import Contact from "./components/contact/Contact";

import Venue from "./components/venues/Venue";
import Profile from "./components/profile/Profile";
import About from "./components/about/About";
import Admin from "./components/admin/Admin";
import Menus from "./components/menus/Menus";
import Forms from "./components/forms/Forms";
import Signin from "./components/siginin/siginup/Signin";
import Signup from "./components/siginin/siginup/Signup";

import DashBoard from "./components/admin/dashboard/Dashboard";
import AddData from "./components/admin/addData/AddData";

export default function App() {
  const element = document.getElementById("wrap");

  useEffect(() => {
    console.log(document.hei);
  });

  const href = window.location.href.split("/");
  const isDashBoard = href[href.length - 1];

  const [sigupPopUp, setSignup] = useState(false);

  return (
    <>
      <UserContext.Provider value={[sigupPopUp, setSignup]}>
        {isDashBoard !== "dashboard" ? <NavBar /> : " "}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/friends" element={<FriendsHome />} />
          <Route path="/themes" element={<Themes />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/menu" element={<Menus />} />
          <Route path="/form" element={<Forms />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Signin />} />

          {/* <Route path="/addData" element={<AddData />} /> */}
          {/* <Route path="/pending/dashboard" element={<Pending />} /> */}
        </Routes>
      </UserContext.Provider>
    </>
  );
}
