import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  coyWithoutShadows,
} from "react-syntax-highlighter/dist/esm/styles/prism"; // 代码高亮主题风格
import { CopyOutlined } from "@ant-design/icons";
import { message } from "antd";

const Code = ({ codeText }) => {
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
    <div style={{ position: "relative" }}>
      <SyntaxHighlighter
        showLineNumbers={true} // 是否展示左侧行数
        lineNumberStyle={{ color: "#ddd", fontSize: 10 }} // 左侧行数的样式
        style={isNight ? vscDarkPlus : coyWithoutShadows} // 主题风格
        language="javascript" // 需要语言类型 如css, jsx , javascript 等
        PreTag="div"
      >
        {String(codeText).replace(/\n$/, "")}
      </SyntaxHighlighter>

      <CopyOutlined
        style={{
          fontSize: 16,
          position: "absolute",
          right: 2,
          top: 2,
          cursor: "pointer",
        }}
        onClick={handleCopy}
      />
    </div>
  );
};

export default Code;
