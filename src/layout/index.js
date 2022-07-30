import React, { useReducer } from "react";
import LayoutContainer from "./styled";
import { SmileOutlined, LeftOutlined } from "@ant-design/icons";
import touxiang from "@/assets/WX20220730-002726@2x.png";
import { useDispatch, useSelector } from "react-redux";

export default ({ children }) => {
  const [isOpen, setIsOpen] = useReducer((state) => !state, true);
  const dispatch = useDispatch();
  const { isNight } = useSelector((state) => ({ isNight: state.isNight }));

  return (
    <LayoutContainer isOpen={isOpen} isNight={isNight}>
      {/* 左侧菜单栏 */}
      <nav className={isOpen ? "open" : "close"}>
        {/* 展开/收起按钮 */}
        <div className="nav_switch" onClick={setIsOpen}>
          <LeftOutlined
            rotate={isOpen ? 0 : 180}
            style={{ fontSize: "14px" }}
          />
        </div>
        {/* 头像 */}
        <div className="nav_userBox">
          <img src={touxiang} />
          <div className="nav_userText">
            <span className="name">xxxlf</span>
            <span className="desc">一个小菜鸡</span>
          </div>
        </div>
        {/* 主题切换 */}
        <div className="nav_theme_switch">
          <span className="text">
            <SmileOutlined style={{ margin: "0 12px" }} />
            {isNight ? "Light Mode" : "Dark Mode"}
          </span>
          <div
            className="toggle_switch"
            onClick={() => dispatch({ type: "themeSwitch" })}
          >
            <span className={`switch${isNight ? " isNight" : ""}`} />
          </div>
        </div>
      </nav>
      {/* 内容区域 */}
      <div className="layout_content">
        <div className="layout_header">123</div>
        <div className="layout_article">{children}</div>
      </div>
    </LayoutContainer>
  );
};
