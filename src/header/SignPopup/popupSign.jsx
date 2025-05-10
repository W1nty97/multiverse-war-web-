import "../popup.css";
import React, { useState } from "react";
import LoginInputSign from "./loginInputSign/loginInputSign";
import PassInputSign from "./passInputSign/passInputSign";
import BtnRegisterOpen from "./btnRegisterOpen";
import SignInBtn from "./SignInBtn/signInBtn";

export default function PopupSign({
  visibilitySign,
  setVisibilitySign,
  setVisibilityReg,
}) {
  const [loginValueOne, setLoginValueOne] = useState("");
  const [passValueOne, setPassValueOne] = useState("");

  function visibilitySignFALSE() {
    setVisibilitySign("hidden");
  }
  return (
    <>
      <div className="header-popup" style={{ visibility: visibilitySign }}>
        <div className="header__popup">
          <div className="popup__box-title">
            <div className="popup__txt-title">Авторизация</div>
            <div className="popup__btn-close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi-x-circle-fill"
                viewBox="0 0 16 16"
                onClick={visibilitySignFALSE}
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
              </svg>
            </div>
          </div>
          <div className="popup__box-inputs">
            <LoginInputSign
              loginValueOne={loginValueOne}
              setLoginValueOne={setLoginValueOne}
            />
            <PassInputSign
              PassValueOne={passValueOne}
              setPassValueOne={setPassValueOne}
            />
            <BtnRegisterOpen
              setVisibilitySign={setVisibilitySign}
              setVisibilityReg={setVisibilityReg}
            />
            <SignInBtn setVisibilitySign={setVisibilitySign} />
          </div>
        </div>
      </div>
    </>
  );
}
