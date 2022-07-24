import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./setup";

// eslint-disable-next-line no-extend-native
Array.prototype.subarray = function (start, end) {
  if (!end) end = this.length;
  if (end < 0) end = this.length + end + 1;
  return [...this].slice(start, end);
};

const roottt = {
  path: "/",
  component: <div />,
  childRoutes: [],
};
const modulesFiles = require.context('./pages', true, /index\.jsx/);
console.log('modulesFiles:', modulesFiles);
console.log(modulesFiles.keys());
const childRoutes = modulesFiles.keys().map((filename) => {
  const routerPath = filename
    .split("/")
    .subarray(1, -1)
    .reverse()
    .subarray(1, -1)
    .reverse().join("/");
    console.log('routerPath:', routerPath);
  const path = `/${routerPath}/`;
  return {
    path,
    component: React.lazy(
      () =>
        new Promise((resolve) => {
          resolve(modulesFiles(filename));
        })
    ),
  };
});

console.log("childRoutes:", childRoutes);
roottt.childRoutes = childRoutes;
console.log("roottt:", roottt);

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode tab="app">
    <App />
  </React.StrictMode>
);
