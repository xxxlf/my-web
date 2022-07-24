import axios from "axios";
import { message } from "antd";

axios.defaults.baseURL = "";
axios.defaults.timeout = 10000;
// axios.defaults.withCredentials = true; //CORS请求发送Cookie和HTTP认证信息
// axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';

// 添加请求拦截器
axios.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // console.log("请求", config);
    // if (config.base_url) config.baseURL = $config[config.base_url];
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    if (
      `${response.data.code}` !== "200" &&
      response.data.success !== true &&
      response.config.skipError !== true
    ) {
      message.error(response.data.message || "This is an error message");
      return Promise.reject(response);
    }
    return response;
  },
  (error) => {
    if (error.response) {
      message.error(error.response.statusText);
    } else if (error.request) {
      message.error("服务器无响应");
    } else {
      message.error(error.message);
    }
    return Promise.reject(error);
  }
);
