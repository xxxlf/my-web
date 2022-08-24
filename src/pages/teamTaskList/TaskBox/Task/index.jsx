import React from "react";
import TaskContainer from "./styled";

const Task = ({ tag, name, details, id, provided, handleRemove }) => {
  return (
    <TaskContainer
      tag={tag}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <h2 className="task-name over-hide">{name}</h2>
      <p className="task-details">{details}</p>
      <div className="remove-bar" onClick={() => handleRemove(id)}>
        -
      </div>
    </TaskContainer>
  );
};

export default Task;
