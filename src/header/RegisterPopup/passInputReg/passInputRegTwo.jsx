import "../../inputs.css";

export default function PassInputRegTwo({ state, handler }) {
  return (
    <>
      <div className="box__pass-content two">
        <div className="pass__content-txt">Подтверждение:</div>
        <div className="pass__content-input">
          <input
            type="password"
            placeholder="Повторите пароль"
            className={`content-input ${(state.passConfirmed && state.passValid) ? "correct" : "unCorrent"}`}
            value={state.confirmPass}
            onInput={handler}
          />
        </div>
      </div>
    </>
  );
}