import "../../inputs.css";
import { valid_login } from "../../usersAPI";

export default function LoginInputReg({ loginValueTwo, setLoginValueTwo }) {
  // Функция для обработки изменения значения в поле ввода логина
  function handleLoginValueTwo(e) {
    setLoginValueTwo(e.target.value);
    if (valid_login(e.target.value)) {
      e.target.classList.remove("unCorrect");
      e.target.classList.add("сorrect");
    } else {
      e.target.classList.add("unCorrect");
      e.target.classList.remove("сorrect");
    }
  }

  return (
    <>
      <div className="box__login-content two">
        <div className="login__content-txt">Логин:</div>
        <div className="login__content-input">
          <input
            type="email"
            placeholder="Введите логин"
            maxLength={20}
            minLength={8}
            className="content-input"
            value={loginValueTwo}
            onInput={handleLoginValueTwo}
          />
        </div>
      </div>
    </>
  );
}
