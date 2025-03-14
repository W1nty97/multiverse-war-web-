import "./filter.css";

import NameFilter from "./nameFilter/nameFilter"

export default function FilterPopup({ visibility }) {
  return (
    <>
      <div className="main__popup-filter" style={{ display: visibility }}>
        <div className="popup__text-title">Фильтр</div>
        <div className="popup__box-content">
          <div className="popup__content" id="one">
            <div className="popup__content-title">Имя</div>
            <NameFilter/>
          </div>
          <div className="popup__content" id="two">
            <div className="popup__content-title">Версия</div>
          </div>
          <div className="popup__content" id="btn">
            <div className="popup__content-btn">Поиск</div>
          </div>
          <div className="popup__content" id="three">
            <div className="popup__content-title">Класс</div>
          </div>
          <div className="popup__content" id="four">
            <div className="popup__content-title">Редкость</div>
          </div>
        </div>
      </div>
    </>
  );
}
