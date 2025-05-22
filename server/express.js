import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { loginUser, getAllCharacters } from './dbAPI.js'; // Импортируем функцию getAllCharacters из db.js

const app = express();
app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// *** Точки входа (endpoints) нашего бэкенда ака сервера.
// Каждая точка получает данные запроса в req, а данные ответа в res
// Точка входа "Список персонажей",
app.use("/api/chars", async (req, res) => {
  let characters = await getAllCharacters(); // нужна функция для чтения data из базы, сейчас возвращает из кода

  res
    .status(200) // Отвечаем статусом HTTP 200 OK (успешно)
    .json(characters); // И шлём данные в формате json
});

// Точка входа Логин
app.use('/api/login', async (req, res) => {
  let { login, password } = req.json();
  let userId = await loginUser(login, password); // Вызываем функцию логина из API

  if (userId) {
    res.status(200).json({ userId });
  } else {
    res.status(403).send();
  }
});

// Точка входа Регистрация
app.use('/api/register', async (req, res) => {
  let { login, password } = req.json();
  let userId = await registerLogin(login, password); 

  if (userId) {
    res.status(200).json({ userId });
  } else {
    res.status(403).send();
  }
});

// Запускаем сервер на порту 9000
app.listen("9000", () => {
  console.log("Express server started at <http://localhost:9000>");
});
