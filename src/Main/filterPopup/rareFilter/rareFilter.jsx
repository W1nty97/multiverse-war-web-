import "./rareFilter.css";

export default function RareFilter() {
  function check(event) {
    if (event.currentTarget.className === "check-block active") {
      event.currentTarget.classList.remove("active");
    } else {
      event.currentTarget.classList.add("active");
    }
  }
  return (
    <>
      <div className="popup-content-all">
        <div className="check-block active" id="cammon" onClick={check}>
          <p>обычная</p>
        </div>
        <div className="check-block active" id="rare" onClick={check}>
          <p>редкая</p>
        </div>
        <div className="check-block active" id="epic" onClick={check}>
          <p>эпическая</p>
        </div>
        <div className="check-block active" id="legend" onClick={check}>
          <p>легендарная</p>
        </div>
        <div className="check-block active" id="mythic" onClick={check}>
          <p>мифическая</p>
        </div>
      </div>
    </>
  );
}
