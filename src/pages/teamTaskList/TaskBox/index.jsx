import React from "react";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";
import TaskBoxContainer from "./styled";
import { Modal } from "antd";

const TaskBox = ({ events, setEvents, currentEvent, setCurrentEvent }) => {
  const handleRemove = () => {
    Modal.confirm({
      title: "确定移除该项目?",
      centered: true,
      closable: true,
      content: "此操作会删除该项目下所有需求，并无法恢复，请谨慎操作!",
      onOk() {
        setEvents((prev) => {
          const result = prev.filter(
            (item) => item.title != currentEvent.title
          );
          // if event is empty
          if (!result.length) {
            // init the event
            const initEvent = [
              {
                title: "Add a new Event",
                ["To do"]: [],
                ["In progress"]: [],
                ["Completed"]: [],
              },
            ];
            setEvents(initEvent);
          } else {
            // set the first event as current
            setCurrentEvent(result[0]);
          }
          return result;
        });
      },
    });
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    const curEvent = events.find((item) => item.title === currentEvent.title);
    const taskCopy = curEvent[source.droppableId][source.index];
    setEvents((prev) =>
      prev.map((event) => {
        if (event.title === currentEvent.title) {
          let eventCopy = { ...event };
          // Remove from source
          const taskListSource = event[source.droppableId];
          taskListSource.splice(source.index, 1);
          eventCopy = { ...event, [source.droppableId]: taskListSource };
          // Add to destination
          const taskListDes = event[destination.droppableId];
          taskListDes.splice(destination.index, 0, taskCopy);
          eventCopy = { ...event, [destination.droppableId]: taskListDes };
          return eventCopy;
        } else {
          return event;
        }
      })
    );
  };

  return (
    <TaskBoxContainer>
      <header className="task-box-header">
        <h1 className="task-box-title">所有需求</h1>
        <button className="remove-button" onClick={handleRemove}>
          移除该项目
        </button>
      </header>
      <DragDropContext onDragEnd={(result) => handleDragEnd(result)}>
        <div className="task-box-body">
          <Column
            tag="To do"
            tagName="待开始"
            events={events}
            setEvents={setEvents}
            currentEvent={currentEvent}
          />
          <Column
            tag="In progress"
            tagName="进行中"
            events={events}
            setEvents={setEvents}
            currentEvent={currentEvent}
          />
          <Column
            tag="Completed"
            tagName="已完成"
            events={events}
            setEvents={setEvents}
            currentEvent={currentEvent}
          />
        </div>
      </DragDropContext>
    </TaskBoxContainer>
  );
};

export default TaskBox;
