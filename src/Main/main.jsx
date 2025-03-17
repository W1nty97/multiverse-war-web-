import "./main.css";
import React, { useState } from "react";
import FilterPopup from "./filterPopup/filter";
import FilterBtn from "./filterPopup/btnFilter";

export default function Main() {
  const [visibilityFilter, setVisibilityFilter] = useState("none");

  const [valueOne, setValueOne] = useState();
  const [valueTwo, setValueTwo] = useState();

  console.log(valueOne);

  const handleChangeOne = (valueOne) => {
    setValueOne(valueOne.target.value);
    console.log(valueOne.target.value);
  };
  const handleChangeTwo = (valueTwo) => {
    setValueTwo(valueTwo.target.value);
    console.log(valueTwo.target.value);
  };
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
            onChange={(handleChangeOne, handleChangeTwo)}
            valueTwo={valueTwo}
          />
        </div>
        <div className="main__box-cards"></div>
      </main>
    </>
  );
}
