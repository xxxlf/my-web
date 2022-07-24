import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";

const func = () => {
  return (dispatch) => {
    setTimeout(() => {
      return dispatch({ type: "xxxxxx", value: "react" });
    }, 100);
  };
};

function Page_1() {
  const dispatch = useDispatch();
  const { code } = useSelector((state) => ({ code: state.code }));

  return (
    <div>
      Page_1_{code}
      <br />
      <Button type="primary" onClick={() => dispatch(func())}>更改</Button>
    </div>
  );
}

export default Page_1;
