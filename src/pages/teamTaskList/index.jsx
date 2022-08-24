import React, { useState, useEffect } from "react";
import EventBar from "./EventBar";
import TaskBox from "./TaskBox";
import styled from "styled-components";

const TeamTaskListContainer = styled.div`
  display: flex;
  background: #fff;
  height: 100%;
  width: 100%;
`;

function FunnyCss() {
  const initEvent = [
    {
      title: "Add a new Event",
      ["To do"]: [],
      ["In progress"]: [],
      ["Completed"]: [],
    },
  ];

  const [events, setEvents] = useState(() => {
    return localStorage.getItem("events")
      ? JSON.parse(localStorage.getItem("events"))
      : initEvent;
  });

  const [currentEvent, setCurrentEvent] = useState(events[0]);

  // Set localStorage
  useEffect(() => {
    if (!events.length) {
      localStorage.setItem("events", JSON.stringify(initEvent));
      setEvents(JSON.parse(localStorage.getItem("events")));
    } else {
      localStorage.setItem("events", JSON.stringify(events));
    }
  }, [events]);

  return (
    <TeamTaskListContainer>
      <EventBar
        events={events}
        setEvents={setEvents}
        currentEvent={currentEvent}
        setCurrentEvent={setCurrentEvent}
      />
      <TaskBox
        events={events}
        setEvents={setEvents}
        currentEvent={currentEvent}
        setCurrentEvent={setCurrentEvent}
      />
    </TeamTaskListContainer>
  );
}

export default FunnyCss;
