import React, { useCallback } from "react";
import { CopyOutlined } from "@ant-design/icons";
import { message } from "antd";
import CodeContainer from "./styled";

export default ({ codeText }) => {

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
    <CodeContainer>
      <span className="code_text">{codeText}</span>
      <CopyOutlined className="icon_copy" onClick={handleCopy} />
    </CodeContainer>
  );
};
