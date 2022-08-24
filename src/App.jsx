import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.less";
import "./assets/iconfont/iconfont.css"
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
// 使用自定义router
// import Routers from "./router";
// 使用文件路径作为router
import Routers from "./filePathRouter";
import Layout from "@/layout";

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <Router basename="/">
          <Layout>
            <Routers />
          </Layout>
        </Router>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
