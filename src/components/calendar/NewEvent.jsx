import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { toggleNewEventSidebarDispatch, addEventDispatch, setDayDetailDispatch } from "../../actions/actionCreatorsDispatch"
import { changeServiceField, setDayDetailObj } from "../../actions/actionCreatorsObj";
import EditField from "./EditField";

const NewEvent = () => {

  const calendarContext = useSelector(state => state.calendarState);

  const eventContext = useSelector(state => state.eventState)
  const dispatch = useDispatch();

  const {
    newEventSidebarToggled,
  } = calendarContext;

  console.log(newEventSidebarToggled)

  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState(eventContext.date);
  const [participants, setParticipants] = useState("");
  const [description, setDescription] = useState("");


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
          dispatch(toggleNewEventSidebarDispatch(false))
        }}
      >
        <i className="fas fa-times-circle"></i>
      </button>
      <p className="new-event-sidebar__title">Add a new event</p>
      <label htmlFor="new-event-sidebar__description">Event Name</label>
      <EditField onEdited={handleChange} value={sendValue(eventContext.eventName, eventName)} type="text" name="eventName" className="new-event-sidebar__description" />
      {/* <input
        type="text"
        name="name"
        className="new-event-sidebar__description"
        value={editedEvent.eventName}
        maxLength="30"
        onChange={handleChange}

      /> */}
      <br />
      <label htmlFor="new-event-sidebar__date">Date</label>
      <EditField onEdited={handleChange} value={sendValue(eventContext.date, date)} type="date" name="date" className="new-event-sidebar__date" />

      {/* <input
        type="date"
        name="date"
        className="new-event-sidebar__date"
        value={date}
        onChange={handleChange}
      /> */}
      <br />
      <label htmlFor="new-event-sidebar__type">Members</label>
      <EditField onEdited={handleChange} value={sendValue(eventContext.participants, participants)} type="select" name="participants" className="new-event-sidebar__type" />

      {/* <select
        className="new-event-sidebar__type"
        name="participants"
        value={participants}
        onChange={handleChange}
      >
        <option value=""></option>
        <option value="Ivan">Ivan</option>
        <option value="Julia">Julia</option>
        <option value="Dan">Dan</option>
        <option value="Michael">Michael</option>
      </select> */}
      <label htmlFor="new-event-sidebar__reminder">Description</label>
      <EditField onEdited={handleChange} value={sendValue(eventContext.description, description)} type="text" name="description" className="new-event-sidebar__description" />

      {/* <input
        type="text"
        name="name"
        className="new-event-sidebar__description"
        value={editedEvent.description}
        maxLength="30"
        onChange={handleChange}

      /> */}
      {/* <textarea
     name="description"
     value={description}
     onChange={handleChange}
     id="" cols="30" rows="10"
     >

     </textarea> */}
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
          dispatch(toggleNewEventSidebarDispatch(false))
          dispatch(setDayDetailDispatch(eventContext.date,
            [
              {
                date: eventContext.date,
                eventName: eventContext.eventName,
                participants: eventContext.participants,
                description: eventContext.description
              }
            ]
            )
            )
        }}
      >
        Add Event
      </button>
    </div>
  );
};

export default NewEvent;
