import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initState = {
  // 默认黑色主题
  isNight: true,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "themeSwitch":
      return {
        ...state,
        isNight: !state.isNight,
      };
    default:
      return {
        ...state,
      };
  }
};

export default createStore(reducer, applyMiddleware(thunk));
