import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { getAllCharacters } from './dbAPI.js'; // Импортируем функцию getAllCharacters из db.js

const app = express();
app.use(cors());
app.use(bodyParser.json());

// *** Точки входа (endpoints) нашего бэкенда ака сервера.
// Каждая точка получает данные запроса в req, а данные ответа в res
// Точка входа "Список персонажей", 
app.use('/api/chars', (req, res) => {
  let characters = getAllCharacters(); // нужна функция для чтения data из базы, сейчас возвращает из кода

  res
    .status(200) // Отвечаем статусом HTTP 200 OK (успешно)
    .json(characters); // И шлём данные в формате json
});

// Точка входа Логин
app.use('/api/login', (req, res) => {
  let { login, password } = req.json();
  let userId = checkLogin(login, password); // нужна функция checkLogin, которая проверит, что логин есть в базе и пароль правильный

  if (userId) {
    res.status(200).json({ userId });
  } else {
    res.status(403).send();
  }
});

// Точка входа Регистрация
app.use('/api/register', (req, res) => {
  let { login, password } = req.json();
  let userId = registerLogin(login, password); // нужна функция registerLogin, которая проверит, 
                                               // что логина ещё нет, и запишет новый логин с паролем

  if (userId) {
    res.status(200).json({ userId });
  } else {
    res.status(403).send();
  }
});

// Запускаем сервер на порту 9000
app.listen('9000', () => {
    console.log('Express server started at <http://localhost:9000>');
});