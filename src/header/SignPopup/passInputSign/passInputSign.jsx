import "../../inputs.css";

export default function PassInput(state, handler) {

  return (
    <>
      <div className="box__pass-content">
        <div className="pass__content-txt">Пароль:</div>
        <div className="pass__content-input">
          <input
            type="password"
            placeholder="Ваш пароль"
            className="content-input"
            value={state.pass}
            onInput={handler}
          />
        </div>
      </div>
    </>
  );
}
