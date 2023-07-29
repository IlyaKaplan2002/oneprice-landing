import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/normalize.css";
import "./styles/index.css";
import "./styles/helpers.css";
import { App } from "./components/App";
import { Icons } from "./components/Icons";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <>
      <Icons />
      <App />
    </>
  </React.StrictMode>
);
