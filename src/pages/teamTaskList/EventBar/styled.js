import styled from "styled-components";

const EventBarContainer = styled.div`
  flex-shrink: 1;
  min-width: 220px;
  text-align: center;
  width: 300px;
  height: 100%;
  border-right: 2px solid #ededed;

  .event-bar-title {
    font-size: 2.5em;
    padding: 25px 0;
    font-weight: 400;
  }

  .add-button {
    width: 80%;
    height: 45px;
    font-size: 1.3em;
    line-height: 45px;
    background-color: #eaf1f0;
    margin: 0 auto;
    border-radius: 10px;
    margin-bottom: 20px;
    cursor: pointer;
    transition: 0.5s;
    outline: none;
  }

  .add-button:hover {
    background-color: #dfe2e2;
  }

  .event-container {
    height: calc(100% - 170px);
    padding: 0 30px;
    overflow-y: auto;

    .event {
      font-size: 1.5em;
      line-height: 1.5em;
      max-width: 230px;
      font-weight: 400;
      border-radius: 10px;
      padding: 5px 10px;
      margin-bottom: 10px;
      transition: 0.5s;
      cursor: pointer;
    }

    .event:hover {
      color: #fff;
      background-color: #e86b3dc4;
      transition: 0.5s;
    }

    .selected-event {
      color: #fff;
      background-color: #e86a3d;
    }
  }
`;

export default EventBarContainer;
