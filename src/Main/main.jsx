import "./main.css";
import { useContext, useState } from "react";
import FilterPopup from "./filterPopup/filter";
import FilterBtn from "./filterPopup/btnFilter";
import Card from "./card.jsx";

import { Context } from "../index.js";

// Фильтрует данные
function filterData(filter, data) {
  if (filter.name !== "Все") {
    data = data.filter((e) => e.name === filter.name);
  }
  if (filter.kind !== "Все") {
    data = data.filter((e) => e.type === filter.kind);
  }
  if (filter.rare.length !== 0) {
    data = data.filter((e) => filter.rare.includes(e.rare));
  }

  return data;
}

export default function Main() {
  const { data } = useContext(Context);

  const [display, setDisplay] = useState("none");
  const [filter, setFilter] = useState({
      name: "Все",
      kind: "Все",
      rare: []
    });

  return (
    <>
      <main className="main">
        <div className="main__box-btns">
          <FilterBtn 
            onClick={_ => setDisplay(display === "none" ? "block" : "none")} 
          />
          <FilterPopup
            display={display}
            filter={filter}
            onChange={setFilter}
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
