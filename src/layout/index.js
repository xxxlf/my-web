import React, { useState, useReducer } from "react";
import { useLocation } from "react-router-dom";
import { LayoutContainer, TextContainer, SpanTran } from "./styled";
import { SmileOutlined, LeftOutlined } from "@ant-design/icons";
import touxiang from "@/assets/WX20220730-002726@2x.png";
import { useDispatch, useSelector } from "react-redux";
import Menu, { menuList } from "./menu";
import bgIMG from "@/assets/cbe2fb96313e16c161442d073b4e3367b6ead301.jpg";

export default ({ children }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useReducer((state) => !state, true);
  const [haveBackTop, setHaveBackTop] = useState(false);
  const dispatch = useDispatch();
  const { isNight } = useSelector((state) => ({ isNight: state.isNight }));

  const handleScrollCapture = (e) => {
    if (e.target.scrollTop > 100) {
      setHaveBackTop(true);
    } else {
      setHaveBackTop(false);
    }
  };

  const returnText = () => {
    const text = menuList.filter((item) => location.pathname === item.link)[0]
      ?.title;
    return `${text || ""}_`.split("").map((value, ind) => (
      <SpanTran
        key={ind}
        delay={ind + 1}
        className={ind === text.length ? "guangbiao" : ""}
      >
        {value}
      </SpanTran>
    ));
  };
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
        <Menu isOpen={isOpen} isNight={isNight} />
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
      <div className="layout_content" onScrollCapture={handleScrollCapture}>
        {/* <div className="layout_header">123</div> */}
        <div className="layout_bgIMG">
          <img src={bgIMG} />
        </div>
        <div className="layout_article">
          <TextContainer>{returnText()}</TextContainer>
          {children}
        </div>
      </div>
      {haveBackTop && (
        <div
          className="back_top"
          onClick={() =>
            (document.getElementsByClassName("layout_content")[0].scrollTop = 0)
          }
        >
          <span className="iconfont icon-fanhuidingbu" />
        </div>
      )}
    </LayoutContainer>
  );
};
