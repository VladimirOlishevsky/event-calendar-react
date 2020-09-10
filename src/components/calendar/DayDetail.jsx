import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import { deleteEventDispatch } from "../../actions/actionCreatorsDispatch";
import NewEventButton from "./NewEventButton";
import { editEventSidebarObj, setDayDetailObj, toggleDetailSidebarObj, toggleNewEventSidebarObj } from "../../actions/actionCreatorsObj";
import moment from 'moment';


const DayDetail = () => {

  const calendarContext = useSelector(state => state.calendarState);
  const dispatch = useDispatch();

  const {
    detailSidebarToggled,
    dayDetail,
    currentMonth,
    currentYear,
  } = calendarContext;

  const fullEvent = (el) => {
    el.classList.toggle('active')
  }

  return (
    <div
      className={
        detailSidebarToggled
          ? "detail-sidebar toggled box-shadow"
          : "detail-sidebar"
      }
      style={{
        top: window.scrollY
      }}
    >
      <button
        className="sidebar__close-btn"
        onClick={() => {
          dispatch(toggleDetailSidebarObj(false));
          dispatch(toggleNewEventSidebarObj(false));
        }}
      >
        <i className="fas fa-times-circle"></i>
      </button>
      <p className="detail-sidebar__date">{`${moment.months(currentMonth - 1)} ${dayDetail.today}, ${currentYear}`}</p>
      <ul className="detail-sidebar__events">
        {dayDetail.events.map(event => (
          <li
            className="event-item"
            onClick={(e) => fullEvent(e.target)}
            key={event.id + event.name}>
            {event.eventName}

            <button
              className="delete-event-btn"
              onClick={() => {
                dispatch(deleteEventDispatch(calendarContext, event.id));
                dispatch(setDayDetailObj(
                  dayDetail.today,
                  dayDetail.events.filter(e => e.id !== event.id)
                ));
              }}
            >
              <i className="fas fa-trash"></i>
            </button>
            <button
              className="edit-event-btn"
              onClick={() => {
                dispatch(toggleNewEventSidebarObj(true));
                dispatch(toggleDetailSidebarObj(false))
                dispatch(editEventSidebarObj(event))
              }}
            >
              <i className="fas fa-edit"></i>
            </button>
            <p className="event-date"><span className="text-bold">Date: </span>{event.date}</p>
            <p className="event-time"><span className="text-bold">Time: </span>{event.time}</p>
            <p className="event-eventName"><span className="text-bold">Event Name: </span> {event.eventName}</p>
            <p className="event-participants"><span className="text-bold">Performer: </span>{event.participants}</p>
            <p className="event-description"><span className="text-bold">Description: </span>{event.description}</p>
          </li>
        ))}
      </ul>

      <NewEventButton date={dayDetail.today} />
    </div>
  );
};

export default DayDetail;
