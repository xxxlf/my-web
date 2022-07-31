import styled from "styled-components";
import {
  BLACK,
  WHITE,
  DDDDDD,
  NIGHT_BG,
  DAY_BG,
  F3F3F3,
  NIGHT_NAV_BG,
  NIGHT_BOX_BG,
  DAY_BOX_BG,
  DAY_NAV_SWITCH_BG,
  NIGHT_TEXT_COLOR,
  DAY_TEXT_COLOR,
  TRANSITION_300MS,
} from "@/const/css";

const CardContainer = styled.div`
  background: ${(props) => (props.isNight ? NIGHT_BOX_BG : DAY_BOX_BG)};
  color: ${(props) => (props.isNight ? NIGHT_TEXT_COLOR : DAY_TEXT_COLOR)};
  border-radius: 6px;
  line-height: 24px;
  margin-bottom: 16px;
  header {
    padding: 16px;
    font-size: 16px;
    border-bottom: 1px solid #ebebeb;
  }
  .content {
    padding: 16px;
    .desc {
      margin-bottom: 8px;
      white-space: pre-wrap;
    }
    .codebox {
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
    }
  }
`;

export default CardContainer;
