import "./main.css";
import { useContext, useState } from "react";
import FilterPopup, { filterData, defaultFilter } from "./filterPopup/filter";
import FilterBtn from "./filterPopup/btnFilter";
import Card from "./card.jsx";

import { Context } from "../index.js";

export default function Main() {
  const { data } = useContext(Context);

  const [displayFilter, setDisplayFilter] = useState("none");
  const [filter, setFilter] = useState(defaultFilter);

  return (
    <>
      <main className="main">
        <div className="main__box-btns">
          <FilterBtn 
            onClick={_ => setDisplayFilter(displayFilter === "none" ? "block" : "none")} 
          />
          <FilterPopup
            display={displayFilter}
            filter={filter}
            onChange={(newFilter) => setFilter(newFilter)}
          />
        </div>
        <div className="main__box-cards">
          {filterData(filter, data).map((element, id) => 
            <Card key={id} element={element} />
          )}
        </div>
      </main>
    </>
  );
}
