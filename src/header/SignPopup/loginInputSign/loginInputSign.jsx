import "../../inputs.css";

export default function LoginInputSign({ loginValueOne, setLoginValueOne }) {
  // Функция для обработки изменения значения в поле ввода логина
  function handleLoginValueOne(e) {
    setLoginValueOne(e.target.value);
  }

  return (
    <>
      <div className="box__login-content">
        <div className="login__content-txt">Логин:</div>
        <div className="login__content-input">
          <input
            type="email"
            placeholder="Ваш логин"
            className="content-input"
            value={loginValueOne}
            onInput={handleLoginValueOne}
          />
        </div>
      </div>
    </>
  );
}
