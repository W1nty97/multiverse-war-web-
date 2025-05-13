import "./btnRegisterOpen.css";

export default function BtnRegisterOpen({ handler
}) {
  return (
    <>
      <div className="popup__btn-register">
        <span className="reg_text-content">{"У вас ещё нет аккаунта? ->"}</span>
        <span className="reg_txt-btn" onClick={handler}>
          {"ЗАРЕГИСТРИРУЙТЕСЬ"}
        </span>
      </div>
    </>
  );
}
