import "./main.css";
import React, { useState, useContext, useEffect } from "react";
import FilterPopup from "./filterPopup/filter";
import FilterBtn from "./filterPopup/btnFilter";
import Card from "./card.jsx";

import { Context } from "../index.js";

export default function Main() {
  const data = useContext(Context);

  const [visibilityFilter, setVisibilityFilter] = useState("none");
  const [valueOne, setValueOne] = useState("Все");
  const [valueTwo, setValueTwo] = useState("Все");
  const [filterList, setFilterList] = useState([data]);

  useEffect(() => {
    if (valueOne === "Все" && valueTwo !== "Все") {
      setFilterList((filterList) =>
        data.filter((element) => element.type === valueTwo)
      );
      console.log(1);
    } else if (valueTwo === "Все" && valueOne !== "Все") {
      setFilterList((filterList) =>
        data.filter((element) => element.name === valueOne)
      );
      console.log(2);
    } else if (valueTwo !== "Все" && valueOne !== "Все") {
      setFilterList((filterList) =>
        data.filter(
          (element) => element.name === valueOne && element.type === valueTwo
        )
      );
      console.log(3);
    } else {
      setFilterList(data);
      console.log(4);
    }
  }, [valueOne, valueTwo, data]);

  return (
    <>
      <main className="main">
        <div className="main__box-btns">
          <FilterBtn
            setVisibilityFilter={setVisibilityFilter}
            visibilityFilter={visibilityFilter}
          />
          <FilterPopup
            visibilityFilter={visibilityFilter}
            valueOne={valueOne}
            valueTwo={valueTwo}
            setValueOne={setValueOne}
            setValueTwo={setValueTwo}
          />
        </div>
        <div className="main__box-cards">
          {filterList.map((element, id) => (
            <Card key={id} element={element} />
          ))}
        </div>
      </main>
    </>
  );
}
