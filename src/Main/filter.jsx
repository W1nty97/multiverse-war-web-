export default function FilterPopup({ visibility }) {
  return (
    <>
      <div className="main__popup-filter" style={{ display: visibility }}>
        <div className="popup__text-title">Фильтр</div>
        <div className="popup__box-content">
          <div className="popup__content-filter" id="one"></div>
          <div className="popup__content-filter" id="two"></div>
          <div className="popup__content-filter" id="img">
            <img src="./img/multiverseStone.png" alt="Multivrerse Stone" />
          </div>
          <div className="popup__content-filter" id="three"></div>
          <div className="popup__content-filter" id="four"></div>
        </div>
      </div>
    </>
  );
}
