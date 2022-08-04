import styled from "styled-components";
import { BLACK, WHITE, F3F3F3 } from "@/const/css";

const CodeContainer = styled.p`
  display: flex;
  padding: 8px;
  background: ${(props) => (props.isNight ? F3F3F3 : WHITE)};
  color: ${BLACK};
  border-radius: 4px;
  .code_text {
    flex: 1;
    white-space: pre-wrap;
  }
  .icon_copy {
    font-size: 16px;
    cursor: pointer;
    margin: 4px 0 0 12px;
  }
`;

export default CodeContainer;
