import "../popup.css";
import { useReducer } from "react";
import LoginInputReg from "./loginInputReg/loginInputReg";
import PassInputReg from "./passInputReg/passInputReg";
import PassInputRegTwo from "./passInputReg/passInputRegTwo";
import RegisterBtn from "./registerBtn/registerBtn";
import { valid_login, valid_pass, registerUser } from "../usersAPI";

// Во фронтенде нельзя использовать dbAPI, база недоступна из фронта.
// Поэтому надо слать запросы через userAPI
// import { registerUser } from "../../server/dbAPI"; // Импортируем функцию registerUser из dbAPI.js

const initState = {
  login: "", // логин
  pass: "", // пароль
  confirmPass: "", // пароль второй раз для подтверждения
  loginValid: false, // логин подходящий
  passValid: false, // пароль подходящий?
  passConfirmed: false, // пароли совпадают?
};

// это функция-хендлер (обработчик событий)
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
        loginValid: valid_login(action.value), // и признак, подходящий ли он
      };
    }
    case "passChanged": {
      // поменялось поле Пароль
      return {
        // возвращаем
        ...state, // старое состояние +
        pass: action.value, // новый пароль,
        passValid: valid_pass(action.value), // признак, что пароль подходящий
        passConfirmed: state.confirmPass === action.value, // и признак, что пароль и подтверждение совпадают (в action.value - новый пароль)
      };
    }
    case "confirmChanged": {
      // поменялось поле Подтверждение пароля
      return {
        // возвращаем
        ...state, // старое состояние +
        confirmPass: action.value, // новое значение поля
        passConfirmed: state.pass === action.value, // и признак, что пароль и подтверждение совпадают (в action.value - новое подтверждение пароля)
      };
    }
    default: {
      // фиг знает за событие
      return state; // поэтому не меняем состояние
    }
  }
}

export default function RegistrationForm({ visibilityReg, setVisibilityReg }) {
  const [state, dispatch] = useReducer(reducer, initState); // создаем состояние

  // просто скрывает форму
  function hideForm() {
    setVisibilityReg("hidden");
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

  function handleConfirmInput(e) {
    dispatch({ type: "confirmChanged", value: e.target.value });
  }

  // Обработчик нажатия кнопки Register
  function handleRegisterClicked() {
    if (registerUser(state.login, state.pass)) {
      alert("Пользователь зарегистрирован");
      hideForm(); // закрываем форму
    } else {
      alert("Пользователь с таким логином уже существует");
    }
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
                onClick={hideForm}
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
              </svg>
            </div>
          </div>
          <div className="popup__box-inputs">
            <LoginInputReg state={state} handler={handleLoginInput} />
            <PassInputReg state={state} handler={handlePassInput} />
            <PassInputRegTwo state={state} handler={handleConfirmInput} />
            <RegisterBtn state={state} handler={handleRegisterClicked} />
          </div>
        </div>
      </div>
    </>
  );
}
