import "./rareFilter.css";

export default function RareFilter() {
  return (
    <>
      <div className="popup-content-all">
        <div className="check-block" id="cammon">
          <p>обычная</p>
        </div>
        <div className="check-block" id="rare">
          <p>редкая</p>
        </div>
        <div className="check-block" id="epic">
          <p>эпическая</p>
        </div>
        <div className="check-block" id="legend">
          <p>легендарная</p>
        </div>
        <div className="check-block" id="mythic">
          <p>мифическая</p>
        </div>
      </div>
    </>
  );
}
