import "./main.css";
import React, { useState } from "react";
import FilterPopup from "./filterPopup/filter";
import FilterBtn from "./filterPopup/btnFilter";

export default function Main() {
  const [visibility, setVisibility] = useState("none");

  return (
    <>
      <main className="main">
        <div className="main__box-btns">
          <FilterBtn setVisibility={setVisibility} visibility={visibility} />
          <FilterPopup visibility={visibility} />
        </div>
        <div className="main__box-cards"></div>
      </main>
    </>
  );
}
