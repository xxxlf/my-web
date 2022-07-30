import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./setup";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode tab="app">
    <App />
  </React.StrictMode>
);
