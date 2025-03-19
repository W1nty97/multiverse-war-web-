import "./rareFilter.css";

export default function RareFilter({ check, id, textContent }) {
  return (
    <>
      <div className="check-block active" id={id} onClick={check}>
        <p>{textContent}</p>
      </div>
    </>
  );
}
