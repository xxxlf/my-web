import React from "react";
import styled from "styled-components";

function B_hoverButton({ onClick = () => {}, children }) {
  return (
    <ButtonContainer onClick={onClick}>
      <span>{children}</span>
    </ButtonContainer>
  );
}

export default B_hoverButton;

const ButtonContainer = styled.button`
  position: relative;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: #182848;
  padding: 8px 12px;
  font-family: sans-serif;
  span {
    font-size: 16px;
    background: linear-gradient(-45deg, #ff00c1, #00fff9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &::after,
  &::before {
    content: "";
    position: absolute;
    background: linear-gradient(
      var(--rotate),
      #ff00c1 0%,
      #9600ff 25%,
      #4900ff 50%,
      #00b8ff 80%,
      #00fff9 100%
    );
    width: 105%;
    height: 110%;
    left: -2.5%;
    top: -5%;
    border-radius: 10px;
    z-index: -1;
    transition: --rotate 9999s linear;
  }
  &:hover::after,
  &:hover::before {
    --rotate: 3600deg;
    transition: --rotate 20s linear;
  }
  &:hover::before {
    animation: fade 1.2s;
  }
  @property --rotate {
    syntax: "<angle>";
    initial-value: 130deg;
    inherits: false;
  }
  @keyframes fade {
    0% {
      opacity: 1;
      transform: scale(1);
      filter: blur(10px);
    }
    100% {
      opacity: 0;
      transform: scale(1.4);
      filter: blur(10px);
    }
  }
`;
