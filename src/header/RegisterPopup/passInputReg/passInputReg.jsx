import "../../inputs.css";

export default function PassInputReg({ state, handler }) {
  return (
    <>
      <div className="box__pass-content two">
        <div className="pass__content-txt">Пароль:</div>
        <div className="pass__content-input">
          <input
            type="password"
            placeholder="Введите пароль"
            className={`content-input ${state.passValid ? 'correct' : 'content-input unCorrect'}`}
            value={state.pass}
            onInput={handler}
          />
        </div>
      </div>
    </>
  );
}
