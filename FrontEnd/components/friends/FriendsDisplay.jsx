import React from "react";
import { familyImagesData } from "../../data/FamilyImagesData";
export default function FriendsDisplay() {
  return (
    <>
      <div className="family-display-wrap">
        <div className="family-display-title">
          <h1>CURATED THIS BIRTHDAY</h1>
          <p>
            A blend of classic silhouettes and our signature shine, embodied by
            enigmatic sequins.
          </p>
        </div>
        {/* <div className="family-display-subtitle"></div> */}
        <div className="hello-world">
          <h1>hello how things are going on in this w</h1>
        </div>
        <div className="family-display-images-wrap">
          {familyImagesData.map((items) => (
            <div className="family-images">
              <img src={items.img} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
