import "./main.css";
import React, { useState } from "react";
import FilterPopup from "./filter";
import FilterBtn from "./btnFilter";

export default function Main() {
  const [visibility, setVisibility] = useState("none");

  return (
    <>
      <main className="main">
        <div className="main__box-btns">
          <FilterBtn setVisibility={setVisibility} visibility={visibility} />
          <FilterPopup visibility={visibility} />
        </div>
      </main>
    </>
  );
}
