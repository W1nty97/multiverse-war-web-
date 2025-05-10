import "./btnSign.css";

export default function BtnSign({ setVisibilitySign }) {
  function visibilitySignTRUE() {
    setVisibilitySign("visible");
  }
  return (
    <>
      <div className="btnSign" onClick={visibilitySignTRUE}>
        Войти
      </div>
    </>
  );
}
