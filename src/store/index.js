import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initState = { code: "react" };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "xxxxxx":
      return {
        ...state,
        code: `${state.code}${action.value}`,
      };
    default:
      return {
        ...state,
      };
  }
};

export default createStore(reducer, applyMiddleware(thunk));
