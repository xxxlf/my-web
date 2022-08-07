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
  background: #000;
  padding: 15px 30px;
  border: 2px solid #0f0;
  margin: 40px;
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 2px;
  color: #fff;
  -webkit-box-reflect: below 0px linear-gradient (transparent, #0002);
  transition: 0.5s;
  transition-delay: 0s;
  filter: hue-rotate(80deg);
  span {
    display: inline-block;
    position: relative;
    z-index: 100;
  }
  &:hover {
    color: #000;
    transition-delay: 1.5s;
    box-shadow: 0 0 10px #0f0, 0 0 20px #0f0, 0 0 40px #0f0, 0 0 80px #0f0,
      0 0 160px #0f0;
  }
  &::before {
    content: "";
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 2px;
    background: #0f0;
    box-shadow: 5px -8px 0 #0f0, 5px 8px 0 #0f0;
    transition: width 0.5s, left 0.5s, height 0.5s, box-shadow 0.5s;
    transition-delay: 1s, 0.5s, 0s, 0s;
  }
  &:hover::before {
    width: 60%;
    height: 100%;
    left: -2px;
    box-shadow: 5px 0 0 #0f0, 5px 0 0 #0f0;
    transition-delay: 0s, 0s, 1s, 1s;
  }
  &::after {
    content: "";
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 2px;
    background: #0f0;
    box-shadow: -5px -8px 0 #0f0, -5px 8px 0 #0f0;
    transition: width 0.5s, left 0.5s, height 0.5s, box-shadow 0.5s;
    transition-delay: 1s, 0.5s, 0s, 0s;
  }
  &:hover::after {
    width: 60%;
    height: 100%;
    right: -2px;
    box-shadow: -5px 0 0 #0f0, -5px 0 0 #0f0;
    transition-delay: 0s, 0s, 1s, 1s;
  }
`;
