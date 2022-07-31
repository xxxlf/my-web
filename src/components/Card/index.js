import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { CopyOutlined } from "@ant-design/icons";
import { message } from "antd";
import CardContainer from "./styled";

export default ({ title, desc, codeText, children, ...rest }) => {
  const { isNight } = useSelector((state) => ({ isNight: state.isNight }));

  const handleCopy = useCallback(() => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(codeText);
      message.success({
        content: "copy!",
        style: {
          marginTop: "40vh",
        },
      });
    }
  }, []);

  return (
    <CardContainer isNight={isNight} {...rest}>
      <header>{title}</header>
      <div className="content">
        <p className="desc">{desc}</p>
        {codeText && (
          <p className="codebox">
            <span className="code_text">{codeText}</span>
            <CopyOutlined className="icon_copy" onClick={handleCopy} />
          </p>
        )}
        {children && children}
      </div>
    </CardContainer>
  );
};
