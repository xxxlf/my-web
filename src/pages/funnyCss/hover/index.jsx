import React from 'react'
import Card from "@/components/Card";
import Xingmuxiaoguo from "./a_xingmuxiaoguo";
// import Button_B from "./b_hoverButton";
import Button_C from "./c_hoverButton";
import Text_D from "./d_hoverText";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  div {
    min-width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default () => {
  return (
    <Card title="好看的 hover 效果">
      <Container>
        <Xingmuxiaoguo />
        <div>
          <Text_D text="xxxlf////" />
        </div>
        <div>
          <Button_C>Button</Button_C>
        </div>
      </Container>
    </Card>
  )
}