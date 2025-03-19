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
  clickButton,
  setClickButton,
}) {
  const handleChangeOne = (valueOne) => {
    setValueOne(valueOne.target.value);
  };
  const handleChangeTwo = (valueTwo) => {
    setValueTwo(valueTwo.target.value);
  };

  //const handleClick = (clickButton) => {
  //  setClickButton((prevClickButton) => {
  //    if (prevClickButton === clickButton) {
  //      return null;
  //    } else {
  //      return clickButton;
  //    }
  //  });
  //};

  const handleClick = (filter) => {
    if (clickButton.includes(filter)) {
      setClickButton(clickButton.filter((f) => f !== filter));
    } else {
      setClickButton([...clickButton, filter]);
    }
  };

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
              <RareFilter
                id="cammon"
                textContent="Обычная"
                isActive={clickButton.includes("Обычная")}
                onClick={() => handleClick("Обычная")}
              />
              <RareFilter
                id="rare"
                textContent="Редкая"
                isActive={clickButton.includes("Редкая")}
                onClick={() => handleClick("Редкая")}
              />
              <RareFilter
                id="epic"
                textContent="Эпическая"
                isActive={clickButton.includes("Эпическая")}
                onClick={() => handleClick("Эпическая")}
              />
              <RareFilter
                id="legend"
                textContent="Легендарная"
                isActive={clickButton.includes("Легендарная")}
                onClick={() => handleClick("Легендарная")}
              />
              <RareFilter
                id="mythic"
                textContent="Мифическая"
                isActive={clickButton.includes("Мифическая")}
                onClick={() => handleClick("Мифическая")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
