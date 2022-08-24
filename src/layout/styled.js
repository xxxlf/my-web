import styled from "styled-components";
import {
  BLACK,
  WHITE,
  DDDDDD,
  NIGHT_BG,
  DAY_BG,
  NIGHT_NAV_BG,
  NIGHT_BOX_BG,
  DAY_BOX_BG,
  DAY_NAV_SWITCH_BG,
  NIGHT_TEXT_COLOR,
  DAY_TEXT_COLOR,
  TRANSITION_300MS,
} from "@/const/css";

export const LayoutContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100%;
  background: ${(props) => (props.isNight ? NIGHT_BG : DAY_BG)};
  transition: ${TRANSITION_300MS};
  .layout_content {
    flex: 1;
    padding: 16px 56px;
    display: flex;
    flex-direction: column;
    overflow: hidden auto;
    scroll-behavior: smooth;
    position: relative;
    /* background: #18191a; */
    /* .layout_header {
      height: 60px;
      background: #000;
      border-bottom: 1px solid #ebebeb;
      border-left: 1px solid #ebebeb;
      box-shadow: 0px 0px 10px 10px rgb(0 0 0 / 40%);
    } */
    .layout_bgIMG {
      margin: -280px;
      position: relative;
      img {
        min-height: 640px;
        width: 100%;
      }
      &::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        box-shadow: ${(props) =>
          props.isNight
            ? "unset"
            : "0 18px 18px 100px rgba(228, 233, 247, 1) inset"};
      }
      transition: ${TRANSITION_300MS};
    }
    .layout_bgIMG.hideBgImg {
      height: 0;
      margin: 0;
      overflow: hidden;
    }
    .layout_article {
      margin-top: 56px;
      position: relative;
      height: calc(100% - 88px);
      flex: 1;
      /* padding: 16px; */
      /* border: 1px solid #000; */
    }
  }

  /* 左侧菜单栏 */
  nav {
    position: relative;
    background: ${(props) => (props.isNight ? NIGHT_NAV_BG : WHITE)};
    padding: 10px 12px;
    transition: ${TRANSITION_300MS};
    &.open {
      width: 260px;
    }
    &.close {
      width: 84px;
    }
    /* 用户头像区域 */
    .nav_userBox {
      margin-top: 8px;
      display: flex;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
        margin: 0 10px;
        border-radius: 4px;
      }
      .nav_userText {
        opacity: ${(props) => (props.isOpen ? 1 : 0)};
        display: flex;
        flex-direction: column;
        color: ${(props) =>
          props.isNight ? NIGHT_TEXT_COLOR : DAY_TEXT_COLOR};
        transition: ${TRANSITION_300MS};
        span {
          white-space: nowrap;
        }
        .name {
          font-weight: 600;
          font-size: 18px;
        }
        .desc {
          font-size: 16px;
        }
      }
    }
    /* 展开/收起按钮 */
    .nav_switch {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 25px;
      right: 0;
      transform: translateX(50%);
      width: 25px;
      height: 25px;
      border-radius: 50%;
      cursor: pointer;
      background: ${(props) => (props.isNight ? WHITE : "rgb(72, 137, 198)")};
      color: ${(props) => (props.isNight ? BLACK : WHITE)};
      transition: transform ease-out 0.1s, background 0.2s;
      z-index: 99;
    }
    .nav_switch::after {
      pointer-events: none;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      content: "";
      box-sizing: content-box;
      top: 0;
      left: 0;
      padding: 0;
      z-index: -1;
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
      opacity: 0;
      transform: scale(0.9);
    }
    .nav_switch:hover::after {
      animation: navSwitchAfter 1.3s ease-out 75ms;
    }
    @keyframes navSwitchAfter {
      0% {
        opacity: 0.3;
      }
      40% {
        opacity: 0.5;
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px #3851bc,
          0 0 0 10px rgba(255, 255, 255, 0.5);
      }
      100% {
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px #3851bc,
          0 0 0 10px rgba(255, 255, 255, 0.5);
        transform: scale(1.5);
        opacity: 0;
      }
    }

    /* 主题切换 */
    .nav_theme_switch {
      height: 50px;
      display: flex;
      align-items: center;
      position: absolute;
      background: ${(props) => (props.isNight ? NIGHT_BOX_BG : DAY_BOX_BG)};
      bottom: 12px;
      right: 12px;
      left: 12px;
      border-radius: 6px;
      .text {
        font-size: 18px;
        flex: 1;
        color: ${(props) =>
          props.isNight ? NIGHT_TEXT_COLOR : DAY_TEXT_COLOR};
        width: ${(props) => (props.isOpen ? "unset" : 0)};
        transition: ${TRANSITION_300MS};
        white-space: nowrap;
        overflow: hidden;
      }
      .toggle_switch {
        height: 100%;
        min-width: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        cursor: pointer;
        .switch {
          background: ${(props) => (props.isNight ? WHITE : DDDDDD)};
          position: relative;
          height: 22px;
          width: 40px;
          border-radius: 25px;
          transition: ${TRANSITION_300MS};
        }
        .switch::before {
          content: "";
          position: absolute;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          top: 50%;
          left: 5px;
          transform: translateY(-50%);
          background: ${(props) => (props.isNight ? BLACK : WHITE)};
          transition: ${TRANSITION_300MS};
        }
        .switch.isNight::before {
          left: 20px;
        }
      }
    }
  }
  .back_top {
    width: 28px;
    height: 28px;
    position: fixed;
    bottom: 14px;
    right: 14px;
    border: 1px solid #fff;
    border-radius: 4px;
    cursor: pointer;
    background: ${(props) => (props.isNight ? NIGHT_BOX_BG : DAY_BOX_BG)};
    color: ${(props) => (props.isNight ? NIGHT_TEXT_COLOR : DAY_TEXT_COLOR)};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuContainer = styled.ul`
  margin-top: 40px;
  li {
    height: 50px;
    list-style: none;
    display: flex;
    align-items: center;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 6px;
    color: ${(props) => (props.isNight ? NIGHT_TEXT_COLOR : DAY_TEXT_COLOR)};
    transition: ${TRANSITION_300MS};
    padding: 0 10px;
    font-size: 18px;
    .iconfont {
      font-size: 18px;
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .menu_text {
      flex: 1;
      display: inline-block;
      width: ${(props) => (props.isOpen ? "unset" : 0)};
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      transition: ${TRANSITION_300MS};
    }
  }
  li.selected,
  li:hover {
    background: ${(props) => (props.isNight ? NIGHT_BOX_BG : DAY_BOX_BG)};
  }
  li.selected {
    color: ${(props) =>
      props.isNight ? NIGHT_TEXT_COLOR : "rgb(72, 137, 198)"};
  }
`;

export const SpanTran = styled.span`
  transition: 0.5s;
  transition-delay: calc(${(props) => props.delay} * 0.1s);
  &.guangbiao {
    animation: guangbiao 1s steps(1) infinite;
  }
  @keyframes guangbiao {
    0%,
    100% {
      color: #fff;
    }
    50% {
      color: transparent;
    }
  }
`;

export const TextContainer = styled.div`
  font: 900 40px "";
  transition: ${TRANSITION_300MS};
  cursor: pointer;
  color: #fff;
  position: absolute;
  top: -56px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  &:hover {
    color: #fff;
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 50px #fff,
      0 0 80px #fff;
  }
`;
