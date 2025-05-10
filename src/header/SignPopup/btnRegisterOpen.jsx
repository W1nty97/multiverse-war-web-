import "./btnRegisterOpen.css";

export default function BtnRegisterOpen({
  setVisibilityReg,
  setVisibilitySign,
}) {
  function visibilityRegTRUE() {
    setVisibilityReg("visible");
    setVisibilitySign("hidden");
  }
  return (
    <>
      <div className="popup__btn-register">
        <span className="reg_text-content">{"У вас ещё нет аккаунта? ->"}</span>
        <span className="reg_txt-btn" onClick={visibilityRegTRUE}>
          {"ЗАРЕГИСТРИРУЙТЕСЬ"}
        </span>
      </div>
    </>
  );
}
