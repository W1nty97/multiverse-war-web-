import "../../inputs.css";
import { valid_pass_two } from "../../usersAPI";


export default function PassInputRegTwo({ passValueThree, setPassValueThree, passValueTwo }) {
  // Функция для обработки изменения значения в поле ввода пароля
  function handlePassValueThree(e) {
    setPassValueThree(e.target.value);
    if (valid_pass_two(e.target.value, passValueTwo)) {
      e.target.classList.remove("unCorrect");
      e.target.classList.add("сorrect");
    } else {
      e.target.classList.add("unCorrect");
      e.target.classList.remove("сorrect");
    }
  }

  return (
    <>
      <div className="box__pass-content two">
        <div className="pass__content-txt">Подтверждение:</div>
        <div className="pass__content-input">
          <input
            type="password"
            placeholder="Повторите пароль"
            className="content-input"
            value={passValueThree}
            onInput={handlePassValueThree}
          />
        </div>
      </div>
    </>
  );
}