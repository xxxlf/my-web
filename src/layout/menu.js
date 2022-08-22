import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { MenuContainer } from "./styled";

export const menuList = [
  { title: "React 小记", link: "/aboutReact", icon: "react" },
  { title: "一行代码搞定", link: "/oneLineOfCode", icon: "tubiao-hanshu" },
  { title: "有意思的CSS", link: "/funnyCss", icon: "youleyuan" },
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
          title={item.title}
        >
          <span className={`iconfont icon-${item.icon}`} />
          <span className="menu_text">{item.title}</span>
        </li>
      ))}
    </MenuContainer>
  );
});

export default Menu;
