import "./filter.css";

import NameFilter from "./nameFilter/nameFilter";
import RareFilter from "./rareFilter/rareFilter";
import ClassFilter from "./classFilter/classFilter";

export default function FilterPopup({
  visibilityFilter,
  valueOne,
  valueTwo,
  setValueOne,
  setValueTwo,
}) {
  const handleChangeOne = (valueOne) => {
    setValueOne(valueOne.target.value);
  };
  const handleChangeTwo = (valueTwo) => {
    setValueTwo(valueTwo.target.value);
  };

  function check(event) {
    if (event.currentTarget.className === "check-block active") {
      event.currentTarget.classList.remove("active");
    } else {
      event.currentTarget.classList.add("active");
    }
  }

  return (
    <>
      <div className="main__popup-filter" style={{ display: visibilityFilter }}>
        <div className="popup__text-title">Фильтр</div>
        <div className="popup__box-content">
          <div className="popup__content" id="one">
            <div className="popup__content-title">Имя</div>
            <NameFilter onChange={handleChangeOne} valueOne={valueOne} />
          </div>
          <div className="popup__content" id="two">
            <div className="popup__content-title">Класс</div>
            <ClassFilter onChange={handleChangeTwo} valueTwo={valueTwo} />
          </div>
          <div className="popup__content" id="btn">
            <div className="popup__content-btn">Поиск</div>
          </div>
          <div className="popup__content" id="three">
            <div className="popup__content-title">Редкость</div>
            <div className="popup-content-all">
              <RareFilter id="cammon" textContent="Обычная" check={check} />
              <RareFilter id="rare" textContent="Редкая" check={check} />
              <RareFilter id="epic" textContent="Эпическая" check={check} />
              <RareFilter id="legend" textContent="Легендарная" check={check} />
              <RareFilter id="mythic" textContent="Мифическая" check={check} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
