import React from "react";
import {useSelector, useDispatch} from 'react-redux';

import { toggleDetailSidebarDispatch, deleteEventDispatch, setDayDetailDispatch, toggleNewEventSidebarDispatch } from "../../actions/actionCreatorsDispatch";
import Navbar from "./Navbar";
import NewEvent from "./NewEvent";
import { editEventSidebarObj } from "../../actions/actionCreatorsObj";
//import { eventViewObj } from "../../actions/actionCreatorsObj";

const DayDetail = () => {

  const calendarContext = useSelector(state => state.calendarState);
  const dispatch = useDispatch();

  const months = [
    "none",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const {
    detailSidebarToggled,
    dayDetail,
    currentMonth,
    currentYear,
    flagEvent
  } = calendarContext;

  console.log(dayDetail)
  //console.log(flagEvent)

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
          dispatch(toggleDetailSidebarDispatch(false));
        }}
      >
        <i className="fas fa-times-circle"></i>
      </button>
      <p className="detail-sidebar__date">{`${months[currentMonth]} ${dayDetail.today}, ${currentYear}`}</p>
      <ul className="detail-sidebar__events">
        {dayDetail.events.map(event => (
          <li 
          className="event-item"
          onClick={(e) => fullEvent(e.target) }
          key={event.id + event.name}>
            {event.eventName}
            
            <button
              className="delete-event-btn"
              onClick={() => {
                dispatch(deleteEventDispatch(calendarContext,event.id));
                dispatch(setDayDetailDispatch(
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
                dispatch(toggleNewEventSidebarDispatch(true));
                dispatch(editEventSidebarObj(event))
              }}
              // onClick={() => {
              //   dispatch(deleteEventDispatch(calendarContext,event.id));
              //   dispatch(setDayDetailDispatch(
              //     dayDetail.today,
              //     dayDetail.events.filter(e => e.id !== event.id)
              //   ));
              // }}
            >
              <i className="fas fa-edit"></i>
            </button>
          <p className="event-date"><span className="text-bold">Date: </span>{event.date}</p>
          <p className="event-eventName"><span className="text-bold">Event Name: </span> {event.eventName}</p>
          <p className="event-participants"><span className="text-bold">Performer: </span>{event.participants}</p>
          <p className="event-description"><span className="text-bold">Description: </span>{event.description}</p>
          </li>
        ))}
      </ul>
      <a
        href={`https://en.wikipedia.org/wiki/${months[currentMonth]}_${dayDetail.today}`}
        target="_blank"
        rel="noopener noreferrer"
        className="detail-sidebar__link"
      >
        <i className="fas fa-external-link-alt"></i> On{" "}
        <span>{`${months[currentMonth]} ${dayDetail.today}`}</span> in history
        (Wikipedia)
      </a>
      <Navbar />
    </div>
  );
};

export default DayDetail;
