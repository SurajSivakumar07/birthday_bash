import React from "react";
import "./search.css";
export default function SearchBar() {
  return (
    <>
      <div className="search-bar-wrap">
        <div className="search">
          <input type="text" placeholder="Search by location" />
        </div>
        <div className="search-icon">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </>
  );
}
