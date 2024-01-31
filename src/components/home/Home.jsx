import React from "react";
import NavBar from "../NavBar/NavBar";
import FamilyDisplay from "../family/FamilyDisplay";
import FamilyBanner from "../family/familyBanner/familyBanner";
import Slider from "../slider/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <FamilyDisplay />
      <FamilyBanner />
    </>
  );
}
