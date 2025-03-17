import "./filter.css";

import NameFilter from "./nameFilter/nameFilter";
import RareFilter from "./rareFilter/rareFilter";
import ClassFilter from "./classFilter/classFilter";
import { useContext } from "react";

import { Context } from "../../index.js";

export default function FilterPopup({ visibilityFilter }) {
  const { data } = useContext(Context);
  console.log(data);
  function filter() {
    console.log(data);
    // for (let i = 0; i < data.length; i++) {
    //   console.log(data[i])
    // }
  }
  return (
    <>
      <div className="main__popup-filter" style={{ display: visibilityFilter }}>
        <div className="popup__text-title">Фильтр</div>
        <div className="popup__box-content">
          <div className="popup__content" id="one">
            <div className="popup__content-title">Имя</div>
            <NameFilter />
          </div>
          <div className="popup__content" id="two">
            <div className="popup__content-title">Класс</div>
            <ClassFilter />
          </div>
          <div className="popup__content" id="btn">
            <div className="popup__content-btn" onClick={filter}>
              Поиск
            </div>
          </div>
          <div className="popup__content" id="three">
            <div className="popup__content-title">Редкость</div>
            <RareFilter />
          </div>
        </div>
      </div>
    </>
  );
}
