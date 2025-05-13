import "./registerBtn.css";

export default function RegisterBtn({ state, handler }) {
  let disabled = !(state.loginValid && state.passValid && state.passConfirmed);

  return (
    <>
      <div className="register__popup-box">
        <button className="verification" disabled={disabled} onClick={handler}>
          Register
        </button> 
      </div>
    </>
  );
}
