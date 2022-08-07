import React from "react";
import styled from "styled-components";

function B_hoverButton({ text }) {
  return (
    <Container>
      {(text || "").split("").map((value, ind) => (
        <SpanTran key={ind} delay={ind + 1}>
          {value}
        </SpanTran>
      ))}
    </Container>
  );
}

export default B_hoverButton;

const SpanTran = styled.span`
  transition: 0.5s;
  transition-delay: calc(${(props) => props.delay} * 0.1s);
`;

const Container = styled.div`
  font: 900 40px "";
  cursor: pointer;
  &:hover {
    color: #fff;
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 50px #fff,
      0 0 80px #fff;
  }
`;
