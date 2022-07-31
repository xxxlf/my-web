import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { MenuContainer } from "./styled";
import { CodeOutlined, MonitorOutlined } from "@ant-design/icons";

const menuList = [
  { title: "一行代码搞定", link: "/oneLineOfCode", icon: <CodeOutlined /> },
  { title: "有意思的CSS", link: "/funnyCss", icon: <MonitorOutlined /> },
];

const Menu = React.memo(({ isOpen, isNight }) => {
  const history = useHistory();
  const location = useLocation();

  return (
    <MenuContainer isOpen={isOpen} isNight={isNight}>
      {menuList.map((item) => (
        <li
          key={item.title}
          onClick={() => history.push(item.link)}
          className={location.pathname === item.link ? "selected" : ""}
        >
          <span className="menu_icon">{item.icon}</span>
          <span className="menu_text">{item.title}</span>
        </li>
      ))}
    </MenuContainer>
  );
});

export default Menu;
