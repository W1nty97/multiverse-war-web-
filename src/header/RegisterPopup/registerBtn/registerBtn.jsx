import "./registerBtn.css";

export default function RegisterBtn({ verifTxt, setVerifTxt, verifTxtColor, setVerifTxtColor}) {
  return (
    <>
      <div className="register__popup-box">
        <div className="verification" style={{ color: verifTxtColor }}>
          {verifTxt}
        </div>
      </div>
    </>
  );
}
