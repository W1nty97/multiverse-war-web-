import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { data } from "./Main/filterPopup/data.js";

export const Context = createContext(data);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider value={data}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
