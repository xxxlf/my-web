import React from "react";
import EventBarContainer from "./styled";
import { Modal, Input, message } from "antd";

const AddEventButton = ({ handleClick }) => {
  return (
    <div className="add-button" onClick={handleClick}>
      +
    </div>
  );
};

const EventBar = ({ events, setEvents, currentEvent, setCurrentEvent }) => {
  const handleAdd = () => {
    let title = "";
    Modal.info({
      title: "新建项目",
      centered: true,
      closable: true,
      content: (
        <Input
          placeholder="请输入项目名称"
          onChange={(e) => (title = e.target.value)}
        />
      ),
      okText: "确定",
      onOk: () => {
        if (!title) {
          message.warning("请输入项目名称!");
          return Promise.reject();
        }
        setEvents((prev) => [
          ...prev,
          {
            title: title,
            ["To do"]: [],
            ["In progress"]: [],
            ["Completed"]: [],
          },
        ]);
      },
    });
  };

  return (
    <EventBarContainer>
      <h1 className="event-bar-title">项目</h1>
      <AddEventButton handleClick={handleAdd} />
      <div className="event-container">
        {events.map((item) => (
          <div
            key={item.title}
            className={`event over-hide ${
              currentEvent.title === item.title ? "selected-event" : ""
            }`}
            onClick={() => setCurrentEvent(item)}
          >
            {item.title}
          </div>
        ))}
      </div>
    </EventBarContainer>
  );
};

export default EventBar;
