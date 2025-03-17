import "./main.css";
import React, { useState } from "react";
import FilterPopup from "./filterPopup/filter";
import FilterBtn from "./filterPopup/btnFilter";

export default function Main() {
  const [visibilityFilter, setVisibilityFilter] = useState("none");

  return (
    <>
      <main className="main">
        <div className="main__box-btns">
          <FilterBtn
            setVisibilityFilter={setVisibilityFilter}
            visibilityFilter={visibilityFilter}
          />
          <FilterPopup visibilityFilter={visibilityFilter} />
        </div>
        <div className="main__box-cards"></div>
      </main>
    </>
  );
}
