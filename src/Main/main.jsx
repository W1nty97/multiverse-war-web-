import "./main.css";
import React, { useState, useContext, useEffect } from "react";
import FilterPopup from "./filterPopup/filter";
import FilterBtn from "./filterPopup/btnFilter";
import Card from "./card.jsx";
import CollectionBtn from "./collecton/collection.jsx";

import { Context } from "../index.js";

export default function Main() {
  const data = useContext(Context);

  const [visibilityFilter, setVisibilityFilter] = useState("none");
  const [valueOne, setValueOne] = useState("Все");
  const [valueTwo, setValueTwo] = useState("Все");
  const [filterList, setFilterList] = useState([data]);
  const [clickButton, setClickButton] = useState([]);

  const rarityOrder = {
    Обычная: 1,
    Редкая: 2,
    Эпическая: 3,
    Легендарная: 4,
    Мифическая: 5,
  };

  data.sort((a, b) => {
    return rarityOrder[a.rare] - rarityOrder[b.rare];
  });

  useEffect(() => {
    let filterList = data;
    if (valueOne !== "Все") {
      filterList = filterList.filter((element) => element.name === valueOne);
    }
    if (valueTwo !== "Все") {
      filterList = filterList.filter((element) => element.type === valueTwo);
    }
    if (clickButton.length !== 0) {
      filterList = filterList.filter((element) =>
        clickButton.includes(element.rare)
      );
    }
    setFilterList(filterList);
  }, [valueOne, valueTwo, clickButton, data]);

  return (
    <>
      <main className="main">
        <div className="main__box-btns">
          <FilterBtn
            setVisibilityFilter={setVisibilityFilter}
            visibilityFilter={visibilityFilter}
          />
          <CollectionBtn />
          <FilterPopup
            visibilityFilter={visibilityFilter}
            valueOne={valueOne}
            valueTwo={valueTwo}
            setValueOne={setValueOne}
            setValueTwo={setValueTwo}
            clickButton={clickButton}
            setClickButton={setClickButton}
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
