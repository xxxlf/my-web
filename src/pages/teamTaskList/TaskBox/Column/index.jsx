import React from "react";
import Task from "../Task";
import { Droppable, Draggable } from "react-beautiful-dnd";
import uuid from "react-uuid";
import ColumnContainer from "./styled";
import { Modal, Input, message } from "antd";

const AddTaskButton = ({ handleClick }) => {
  return (
    <div className="add-task-button" onClick={handleClick}>
      +
    </div>
  );
};

const Column = ({ tag, tagName, currentEvent, events, setEvents }) => {
  const handleAdd = () => {
    let name = "";
    let details = "";
    Modal.info({
      title: `新建${tagName}项目`,
      centered: true,
      closable: true,
      content: (
        <>
          <Input
            placeholder="必填，请输入需求名称"
            onChange={(e) => (name = e.target.value)}
            style={{ marginBottom: 8 }}
          />
          <Input
            placeholder="请输入需求详情"
            onChange={(e) => (details = e.target.value)}
          />
        </>
      ),
      okText: "确定",
      onOk: () => {
        if (!name) {
          message.warning("请输入需求名称!");
          return Promise.reject();
        }
        setEvents((prev) => {
          const arrCopy = [...prev];
          const index = prev.findIndex(
            (event) => event.title === currentEvent.title
          );
          const eventCopy = arrCopy[index];
          // Remove old and add the latest data
          arrCopy.splice(index, 1, {
            ...eventCopy,
            [tag]: [
              ...eventCopy[tag],
              { name: name, id: uuid(), details: details },
            ],
          });
          return arrCopy;
        });
      },
    });
  };

  const handleRemove = (id) => {
    setEvents((prev) =>
      prev.map((event) => {
        if (event.title === currentEvent.title) {
          const taskList = event[tag];
          const index = taskList.findIndex((item) => item.id === id);
          taskList.splice(index, 1);
          return { ...event, [tag]: [...taskList] };
        } else {
          return event;
        }
      })
    );
  };

  return (
    <ColumnContainer>
      <span style={{ marginLeft: 24 }}>{tagName}</span>
      <AddTaskButton handleClick={handleAdd} />
      <Droppable droppableId={tag}>
        {(provided, snapshot) => {
          return (
            <div
              className="task-container"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {events
                .find((event) => event.title === currentEvent.title)
                ?.[tag].map((item, index) => {
                  return (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => {
                        return (
                          <Task
                            tag={tag}
                            name={item.name}
                            details={item.details}
                            id={item.id}
                            provided={provided}
                            snapshot={snapshot}
                            handleRemove={handleRemove}
                          />
                        );
                      }}
                    </Draggable>
                  );
                })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </ColumnContainer>
  );
};

export default Column;
