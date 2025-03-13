export default function FilterBtn({ setVisibility, visibility }) {
  function visibilityFilter() {
    if (visibility === "none") {
      setVisibility("block");
    } else {
      setVisibility("none");
    }
  }
  return (
    <>
      <div className="main__btn-filter">
        <div className="btn-filter" onClick={visibilityFilter}>
          Фильт
        </div>
      </div>
    </>
  );
}
