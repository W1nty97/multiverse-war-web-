import "./filter.css";

import NameFilter from "./nameFilter/nameFilter";
import RareFilter from "./rareFilter/rareFilter";
import ClassFilter from "./classFilter/classFilter";
import { useContext } from "react";

import { Context } from "../../index.js";

export default function FilterPopup({
  visibilityFilter,
  valueOne,
  onChange,
  valueTwo,
}) {
  const data = useContext(Context);
  function filter() {
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
            <NameFilter onChange={onChange} valueOne={valueOne} />
          </div>
          <div className="popup__content" id="two">
            <div className="popup__content-title">Класс</div>
            <ClassFilter onChange={onChange} valueOne={valueTwo} />
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
