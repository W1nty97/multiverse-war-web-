export default function FilterBtn({ setVisibility, visibility }) {
  function visibilityFunc() {
    if (visibility === "none") {
      setVisibility("block");
    } else {
      setVisibility("none");
    }
  }
  return (
    <>
      <div className="main__btn-filter">
        <div className="btn-filter" onClick={visibilityFunc}>
          click
        </div>
      </div>
    </>
  );
}
