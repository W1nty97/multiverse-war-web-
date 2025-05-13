import "../popup.css";
import { useReducer } from "react";
import LoginInputSign from "./loginInputSign/loginInputSign";
import PassInputSign from "./passInputSign/passInputSign";
import BtnRegisterOpen from "./btnRegisterOpen";
import SignInBtn from "./SignInBtn/signInBtn";

const initState = {
  login: "", // логин
  pass: "", // пароль
};

function reducer(
  state, // старое состояние
  action
) {
  // событие, которое передали в dispatch
  switch (
    action.type // какое событие произошло?
  ) {
    case "loginChanged": {
      // поменялось поле Логин
      return {
        // возвращаем
        ...state, // старое состояние +
        login: action.value, // сохраняем в нём новый логин
      };
    }
    case "passChanged": {
      // поменялось поле Пароль
      return {
        // возвращаем
        ...state, // старое состояние +
        pass: action.value, // новый пароль,
      };
    }
    default: {
      // фиг знает за событие
      return state; // поэтому не меняем состояние
    }
  }
}

export default function PopupSign({
  visibilitySign,
  setVisibilitySign,
  setVisibilityReg,
}) {
  const [state, dispatch] = useReducer(reducer, initState); // создаем состояние

  // просто скрывает форму
  function hideSignForm() {
    setVisibilitySign("hidden");
  }
  function showRegForm() {
    setVisibilityReg("visible");
  }

  function handleLoginInput(e) {
    // хендлер (обработчик) события onInput поля Логин
    dispatch({
      // отправляем событие
      type: "loginChanged", // "изменилось поле Логин"
      value: e.target.value, // и новое значение
    });
  }

  function handlePassInput(e) {
    dispatch({ type: "passChanged", value: e.target.value });
  }

  function handleRegisterOpenClicked() {
    hideSignForm(); // скрываем форму входа
    showRegForm(); // открываем форму регистрации
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
                onClick={hideSignForm}
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
              </svg>
            </div>
          </div>
          <div className="popup__box-inputs">
            <LoginInputSign state={state} handler={handleLoginInput} />
            <PassInputSign state={state} handler={handlePassInput} />
            <BtnRegisterOpen handler={handleRegisterOpenClicked} />
            <SignInBtn state={state} handler={hideSignForm} />
          </div>
        </div>
      </div>
    </>
  );
}
