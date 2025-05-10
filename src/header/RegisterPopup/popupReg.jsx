import "../popup.css";
import React, { useState } from "react";
import LoginInputReg from "./loginInputReg/loginInputReg";
import PassInputReg from "./passInputReg/passInputReg";
import PassInputRegTwo from "./passInputReg/passInputRegTwo";
import RegisterBtn from "./registerBtn/registerBtn";

export default function PopupReg({ visibilityReg, setVisibilityReg }) {
  const [loginValueTwo, setLoginValueTwo] = useState("");
  const [passValueTwo, setPassValueTwo] = useState("");
  const [passValueThree, setPassValueThree] = useState("");

  const [verifTxt, setVerifTxt] = useState("");
  const [verifTxtColor, setVerifTxtColor] = useState("");

  function visibilityRegFALSE() {
    setVisibilityReg("hidden");
  }

  return (
    <>
      <div className="header-popup" style={{ visibility: visibilityReg }}>
        <div className="header__popup">
          <div className="popup__box-title">
            <div className="popup__txt-title">Регистрация</div>
            <div className="popup__btn-close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi-x-circle-fill"
                viewBox="0 0 16 16"
                onClick={visibilityRegFALSE}
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
              </svg>
            </div>
          </div>
          <div className="popup__box-inputs">
            <LoginInputReg
              loginValueTwo={loginValueTwo}
              setLoginValueTwo={setLoginValueTwo}
            />
            <PassInputReg
              PassValueTwo={passValueTwo}
              setPassValueTwo={setPassValueTwo}
            />
            <PassInputRegTwo
              passValueTwo={passValueTwo}
              passValueThree={passValueThree}
              setPassValueThree={setPassValueThree}
            />
            <RegisterBtn
              verifTxt={verifTxt}
              setVerifTxt={setVerifTxt}
              verifTxtColor={verifTxtColor}
              setVerifTxtColor={setVerifTxtColor}
            />
          </div>
        </div>
      </div>
    </>
  );
}
