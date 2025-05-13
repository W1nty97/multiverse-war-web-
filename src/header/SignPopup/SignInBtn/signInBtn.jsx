import "./signInBtn.css";

export default function SignInBtn({ state, handler }) {
  return (
    <>
      <div className="box_signInBtn">
        <div className="signInBtn" onClick={handler}>
          Войти
        </div>
      </div>
    </>
  );
}
