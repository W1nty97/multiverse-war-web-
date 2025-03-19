import "./rareFilter.css";

export default function RareFilter({ onClick, id, textContent, isActive, }) {

  return (
    <>
      <div
        className={isActive ? "check-block active" : "check-block"}
        id={id}
        onClick={onClick}
      >
        <p>{textContent}</p>
      </div>
    </>
  );
}
