import styled from "styled-components";

const BLACK = "#000";
const WHITE = "#fff";
const F3F3F3 = "#f3f3f3";
const DDDDDD = "#ddd";
const ANTD_BG = "var(--antd-wave-shadow-color)";

const NIGHT_BG = "#18191a";
const DAY_BG = "#e4e9f7";

const NIGHT_NAV_BG = "#242526";

const NIGHT_BOX_BG = "#3a3b3c";
const DAY_BOX_BG = "#f6f5ff";

const DAY_NAV_SWITCH_BG = "#695cfe";

const NIGHT_TEXT_COLOR = "#ccc";
const DAY_TEXT_COLOR = "#707070";

const TRANSITION_300MS = "all .3s ease";

const LayoutContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100%;
  background: ${(props) => (props.isNight ? NIGHT_BG : DAY_BG)};
  transition: ${TRANSITION_300MS};
  .layout_content {
    flex: 1;
    display: flex;
    flex-direction: column;
    /* background: #18191a; */
    .layout_header {
      height: 60px;
      /* background: #000; */
      border-bottom: 1px solid #ebebeb;
      border-left: 1px solid #ebebeb;
      box-shadow: 0px 0px 10px 10px rgb(0 0 0 / 40%);
    }
    .layout_article {
      flex: 1;
      margin: 16px;
      padding: 16px;
      border: 1px solid #000;
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
      background: ${(props) => (props.isNight ? WHITE : DAY_NAV_SWITCH_BG)};
      color: ${(props) => (props.isNight ? BLACK : WHITE)};
      transition: transform ease-out 0.1s, background 0.2s;
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
`;

export default LayoutContainer;
