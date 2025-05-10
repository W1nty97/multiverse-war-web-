import "../../inputs.css";
import { valid_pass } from "../../usersAPI";

export default function PassInputReg({ passValueTwo, setPassValueTwo}) {
  // Функция для обработки изменения значения в поле ввода пароля
  function handlePassValueTwo(e) {
    setPassValueTwo(e.target.value);
    if(valid_pass(e.target.value)) {
          e.target.classList.remove("unCorrect");
          e.target.classList.add("сorrect");
        }else {
          e.target.classList.add("unCorrect");
          e.target.classList.remove("сorrect");
        }
  }
  
  return (
    <>
      <div className="box__pass-content two">
        <div className="pass__content-txt">Пароль:</div>
        <div className="pass__content-input">
          <input
            type="password"
            placeholder="Введите пароль"
            className="content-input"
            value={passValueTwo}
            onInput={handlePassValueTwo}
          />
        </div>
      </div>
    </>
  );
}
