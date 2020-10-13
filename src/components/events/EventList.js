
import React, { useContext, useEffect } from "react";
import { EventContext, addEvent } from "./EventProvider";
import { EventHTML } from "./EventHTML";

export const EventList = (props) => {
  const { events, getEvents } = useContext(EventContext);
  const activeUser = +localStorage.getItem("activeUser")


  useEffect(() => {
    getEvents(activeUser);
  }, []);

  return (
    <>
      <h2>Events</h2>
      <div className="events">
        {events.map((event) => {
          return <EventHTML key={event.id} event={event} />;
        })}
      </div>
    </>
  );
};