import styled from "styled-components";

const TaskContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: ${(props) =>
    props.tag === "Completed" ? "#fafafa" : "#fff"};
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 18px;
  cursor: pointer;
  transition: 0.2s;
  user-select: none;
  border: 1px solid #ccc;
  outline: none;

  .task-name {
    font-style: normal;
    font-size: 0.9em;
    font-weight: 300;
    line-height: 1.1em;
  }

  .task-name::before {
    content: "●";
    font-style: normal;
    color: ${(props) => {
      if (props.tag === "To do") return "#f19737";
      if (props.tag === "In progress") return "#4889c6";
      if (props.tag === "Completed") return "#52c41a";
    }};
    margin-right: 10px;
  }

  .over-hide {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .task-details {
    font-style: normal;
    font-weight: 300;
    font-size: 0.8em;
    color: #9c9c9c;
    word-wrap: break-word;
    margin-top: 10px;
    line-height: 1.1em;
  }

  .remove-bar {
    position: absolute;
    bottom: 15px;
    right: 15px;
    text-align: end;
    font-size: 3.5em;
    font-weight: 300;
    color: #888;
    line-height: 0.1em;
    transition: 0.5s;
  }

  .remove-bar:hover {
    color: red;
    font-size: 6em;
    line-height: 0.01em;
    transition: 0.5s;
  }

  &:hover {
    background-color: rgba(0, 119, 256, 0.014);
    transition: 0.2s;
  }
`;

export default TaskContainer;
