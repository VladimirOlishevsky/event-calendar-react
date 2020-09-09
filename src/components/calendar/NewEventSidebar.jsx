import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addEventDispatch } from "../../actions/actionCreatorsDispatch"
import { changeServiceField, toggleNewEventSidebarObj } from "../../actions/actionCreatorsObj";
import EditField from "./EditField";

const NewEventSidebar = () => {

  const calendarContext = useSelector(state => state.calendarState);

  //console.log(calendarContext);

  const eventContext = useSelector(state => state.eventState)
  const dispatch = useDispatch();

  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [participants, setParticipants] = useState("");
  const [description, setDescription] = useState("");


const {
    newEventSidebarToggled,
  } = calendarContext;


  const clearInputs = () => {
    setEventName("");
    setDate("");
    setParticipants("");
    setDescription("");
  };

  const handleChange = evt => {

    const { name, value } = evt.target;

    if (name === 'eventName') setEventName(value)
    if (name === 'date') setDate(value)
    if (name === 'participants') setParticipants(value)
    if (name === 'description') setDescription(value)

    dispatch(changeServiceField(name, value));
  }

  const sendValue = (value, defaultValue) => value ? value : defaultValue;

  return (
    <div
      className={
        newEventSidebarToggled
          ? "new-event-sidebar toggled box-shadow"
          : "new-event-sidebar"
      }
      style={{
        top: window.scrollY
      }}
    >
      <button
        className="sidebar__close-btn"
        onClick={() => {
          dispatch(toggleNewEventSidebarObj(false))
        }}
      >
        <i className="fas fa-times-circle"></i>
      </button>
      <p className="new-event-sidebar__title">Add a new event</p>
      <label htmlFor="new-event-sidebar__description">Event Name</label>
      <EditField onEdited={handleChange} value={sendValue(eventContext.eventName, eventName)} type="text" name="eventName" className="new-event-sidebar__description" />
    
      <label htmlFor="new-event-sidebar__date">Date</label>
      <EditField onEdited={handleChange} value={sendValue(eventContext.date, date)} type="date" name="date" className="new-event-sidebar__date" />

      <label htmlFor="new-event-sidebar__type">Members</label>
      <EditField onEdited={handleChange} value={sendValue(eventContext.participants, participants)} type="select" name="participants" className="new-event-sidebar__type" />

      <label htmlFor="new-event-sidebar__reminder">Description</label>
      <EditField onEdited={handleChange} value={sendValue(eventContext.description, description)} type="text" name="description" className="new-event-sidebar__description" />

      <button
        className="new-event-sidebar__add-btn"
        onClick={() => {
          if (eventContext.eventName === "" || eventContext.date === "") {
            return alert("Fill both of event-name and date fields.");
          } else {
            dispatch(
              addEventDispatch(
                eventContext.id,
                eventContext.eventName,
                eventContext.date,
                eventContext.participants,
                eventContext.description,
                calendarContext
              )
            );
            clearInputs();
          }
          dispatch(toggleNewEventSidebarObj(false))
        }}
      >
        Add Event
      </button>
    </div>
  );
};

export default NewEventSidebar;
