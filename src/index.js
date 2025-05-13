import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { rareness, data } from "./data.js";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
      <Context.Provider value={{
        data: data.sort((a, b) => rareness[a.rare] - rareness[b.rare]),
        rareness: rareness
      }}>
        <App />
      </Context.Provider>
    </React.StrictMode>
  );
