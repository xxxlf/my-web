import styled from "styled-components";

const TaskBoxContainer = styled.div`

  flex: 1;
  /* min-width: 1070px; */
  width: calc(100% - 300px);
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  .task-box-header {
    display: flex;
    align-items: center;
    padding: 0 50px;
    padding-top: 22px;
    .task-box-title {
      font-size: 2.5em;
      padding: 25px 0;
      font-weight: 500;
    }
    .remove-button {
      font-size: 1.1em;
      margin-left: 35px;
      padding: 10px 10px;
      background: none;
      border: 2px solid red;
      border-radius: 10px;
      cursor: pointer;
      transition: 0.3s;
      outline: none;
    }
    .remove-button:hover {
      color: #fff;
      background-color: red;
      transition: 0.3s;
    }
  }
  /* task */

  .task-box-body {
    flex: 1;
    display: flex;
    width: 100%;
    overflow-y: auto;
    margin-top: 20px;
    padding: 0 50px;
  }

`;

export default TaskBoxContainer;
