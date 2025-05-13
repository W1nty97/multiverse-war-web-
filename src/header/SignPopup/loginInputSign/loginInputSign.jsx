import "../../inputs.css";

export default function LoginInputSign({state, handler}) {

  return (
    <>
      <div className="box__login-content">
        <div className="login__content-txt">Логин:</div>
        <div className="login__content-input">
          <input
            type="email"
            placeholder="Ваш логин"
            className="content-input"
            value={state.login}
            onInput={handler}
          />
        </div>
      </div>
    </>
  );
}
