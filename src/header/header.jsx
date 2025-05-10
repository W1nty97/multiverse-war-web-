import "./header.css";
import PopupSign from "./SignPopup/popupSign";
import BtnSign from "./SignPopup/btnSign";
import PopupReg from "./RegisterPopup/popupReg";
import React, { useState } from "react";

export default function Header() {
  const [visibilitySign, setVisibilitySign] = useState("hidden");
  const [visibilityReg, setVisibilityReg] = useState("hidden");

  return (
    <>
      <header className="header">
        <div className="header__box-img">
          <img src="./img/logotype.png" alt="logo" />
        </div>
        <div className="header__box-txt">
          <p className="header__text-logo">Multiverse</p>
          <p className="header__text-logo-2">War</p>
        </div>
        <div className="header__box-btn">
          <BtnSign
            visibilitySign={visibilitySign}
            setVisibilitySign={setVisibilitySign}
          />
        </div>
        <PopupSign
          visibilitySign={visibilitySign}
          setVisibilitySign={setVisibilitySign}
          visibilityReg={visibilityReg}
          setVisibilityReg={setVisibilityReg}
        />
        <PopupReg
          visibilityReg={visibilityReg}
          setVisibilityReg={setVisibilityReg}
        />
      </header>
    </>
  );
}
