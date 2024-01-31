import React from "react";
import "./familyBanner.css";
import video from "../../../assets/birthdayParty.mp4";
export default function FamilyBanner() {
  return (
    <>
      <div className="family-banner">
        <video className="VideoTag" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </>
  );
}
