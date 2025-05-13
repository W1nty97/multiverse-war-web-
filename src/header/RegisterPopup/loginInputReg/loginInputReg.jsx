import "../../inputs.css";

export default function LoginInputReg({ state, handler }) {
  // Функция для обработки изменения значения в поле ввода логина
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
            className={`content-input ${
              state.loginValid ? "correct" : "unCorrect"
            }`}
            value={state.login}
            onInput={handler}
          />
        </div>
      </div>
    </>
  );
}
