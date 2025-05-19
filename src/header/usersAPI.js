import axios from "axios";

export function valid_login(login) {
  return (
    !/\s/.test(login) &&
    login.length >= 8 &&
    login.length <= 64 &&
    !/[а-яА-ЯёЁ]/.test(login)
  );
}
export function valid_pass(pass) {
  return (
    !/\s/.test(pass) &&
    pass.length >= 5 &&
    pass.length <= 20 &&
    !/[а-яА-ЯёЁ]/.test(pass)
  );
}
// Т.к. мы не можем подключить на фронте dbAPI, мы сделаем здесь такие же функции, что и там,
// но они будут передавать запрос на сервер, т.е. на бэкенд.
export async function loginUser(login, pass) {
  return await axios
    .post( // Отправляем HTTP запрос POST
      "http://localhost:9000/api/login", // В точку бэкенда "Логин"
      { login: login, pass: pass }) // Параметры в теле (content) запроса
    .catch((error) => { // Если ошибка (HTTP status > 2xx), то
      console.log(error.toJSON()); // Увидим в браузере в консоли
      return false; // Вернем из фунции false
    })
    .then((res) => {
      switch (res.status) { // Проверяем статус ответа
        case 200: return true; // HTTP 200 OK это хорошо
        default:
          console.log(res.status); // Остальные выводим в лог
      }
      return false;
    });
  }
export async function registerUser(login, pass) {
  return await axios
    .post( // Отправляем HTTP запрос POST
      "http://localhost:9000/api/register", // Точка бэкенда "Регистрация"
      { login: login, pass: pass }) // Параметры в теле (content) запроса
    .catch((error) => { // Если ошибка (HTTP status > 2xx), то
      console.log(error.toJSON()); // Увидим в браузере в консоли
      return false; // Вернем из фунции false
    })
    .then((res) => {
      switch (res.status) { // Проверяем статус ответа
        case 200: return true; // HTTP 200 OK это хорошо
        default:
          console.log(res.status); // Остальные выводим в лог
      }
      return false;
    });
}