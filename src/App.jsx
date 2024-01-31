import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import "./app.css";
import FamilyDisplay from "./components/family/FamilyDisplay";
import FamilyBanner from "./components/family/familyBanner/familyBanner";
import Home from "./components/home/Home";

import { Routes, Route, Form } from "react-router-dom";
import FriendsDisplay from "./components/friends/FriendsDisplay";
import FriendsHome from "./components/friends/FriendsHome";
import Themes from "./components/themes/Themes";
import { UserContext } from "./components/userContexts/contexts";
// import Admin from "./components/admim/ad
import Contact from "./components/contact/Contact";
import Dashboard from "./components/admin/dashboard/DashBoard";
import Venue from "./components/venues/Venue";
import Profile from "./components/profile/Profile";
import About from "./components/about/About";
import Admin from "./components/admin/Admin";
import Menus from "./components/menus/Menus";
import Forms from "./components/forms/Forms";
import Signin from "./components/siginin/siginup/Signin";
import Signup from "./components/siginin/siginup/Signup";
import StickyFooter from "./components/footer/StickyFooter";

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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/menu" element={<Menus />} />
          <Route path="/form" element={<Forms />} />
          <Route path="/siginup" element={<Signup />} />
          <Route path="/sigin" element={<Signin />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}
