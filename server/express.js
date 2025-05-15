import { express } from 'express';
import { data } from '../src/data.js';

const app = express();

// Список персонажей
app.use('/api/chars', (req, res) => {
  let result = data; // нужна функция для чтения data из базы 

  res.status(200).json(result);
});

// Логин
app.use('/api/login', (req, res) => {
  let { login, password } = req.json();
  let userId = checkLogin(login, password); // нужна функция checkLogin, которая проверит, что логин есть в базе и пароль правильный

  if (userId) {
    res.status(200).json({ userId });
  } else {
    res.status(403).send();
  }
});

// Регистрация
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