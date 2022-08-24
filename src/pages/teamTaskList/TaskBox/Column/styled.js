import styled from "styled-components";

const ColumnContainer = styled.div`
  &:last-child {
    margin-right: 0;
  }
  height: 100%;
  background-color: #f6f9fa;
  border-radius: 12px;
  padding-top: 16px;
  font-size: 1.4em;
  font-weight: 400;
  transition: 1s;
  margin-right: 24px;
  display: flex;
  flex-direction: column;

  .add-task-button {
    width: 300px;
    height: 40px;
    font-size: 1.3em;
    line-height: 40px;
    background-color: #ebf1f1;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.5s;
    outline: none;
    text-align: center;
    font-style: normal;
    margin: 16px 24px;
    font-size: 1.1em;
  }

  .add-task-button:hover {
    background-color: #dee4e4;
  }

  .task-container {
    flex: 1;
    width: 100%;
    padding: 0 24px;
    overflow: auto;
  }
`;

export default ColumnContainer;
