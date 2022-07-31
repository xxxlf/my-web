import React from "react";
import styled from "styled-components";

/**
 * 鼠标 hover 扩散光晕的形式  达到一个醒目的效果
 */
function Xingmuxiaoguo() {
  return (
    <Box className="effecf-7">
      <span className="icon"></span>
    </Box>
  );
}

export default Xingmuxiaoguo;

const Box = styled.div`
  text-align: center;
  .icon {
    display: inline-block;
    font-size: 0px;
    cursor: pointer;
    margin: 15px 30px;
    width: 90px;
    height: 90px;
    border-radius: 50px;
    text-align: center;
    position: relative;
    z-index: 1;
    color: #fff;
  }

  .icon::before {
    content: "";
    font-size: 48px;
    line-height: 90px;
    display: block;
  }
  .icon::after {
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    content: "";
    box-sizing: content-box;
  }

  &.effecf-7 .icon {
    background: #fff;
    transition: transform ease-out 0.1s, background 0.2s;
  }

  &.effecf-7 .icon::after {
    top: 0;
    left: 0;
    padding: 0;
    z-index: -1;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
    opacity: 0;
    transform: scale(0.9);
  }

  &.effecf-7 .icon:hover::after {
    animation: donghua 1.3s ease-out 75ms;
  }

  @keyframes donghua {
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
`;
