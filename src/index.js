import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { Axios } from "axios";
import "./index.css";
import App from "./App.js";
import { rareness } from "./data.js";

// Мы у пользователя в браузере
// Запрашиваем у сервера список персонажей
const data = await new Axios()
  .get("http://localhost:9000/api/chars") // Точка входа "Список персонажей"
  .then((res) => JSON.parse(res.data)); // Ответ парсим из json

// Теперь список персонажей в data, продолжаем как раньше

export const Context = createContext();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        data: data.sort((a, b) => rareness[a.rarity] - rareness[b.rarity]),
        rareness: rareness,
      }}
    >
      
      <App />
    </Context.Provider>
  </React.StrictMode>
);
