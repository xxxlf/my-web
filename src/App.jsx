import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.less";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import Routers from "./router";

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <Routers />
      </ConfigProvider>
    </Provider>
  );
}

export default App;
