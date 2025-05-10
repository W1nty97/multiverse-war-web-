import "./signInBtn.css";

export default function SignInBtn({ setVisibilitySign }) {
  function funcSignIn() {
    setVisibilitySign("hidden");
  }
  return (
    <>
      <div className="box_signInBtn">
        <div className="signInBtn" onClick={funcSignIn}>
          Войти
        </div>
      </div>
    </>
  );
}
