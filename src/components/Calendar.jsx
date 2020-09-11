import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Day from "./Day";
import DayDetail from "./DayDetail";
import NewEventSidebar from "./NewEventSidebar";
import Buttons from "./Buttons";
import { getCurrentDateDispatch, getEventsFromLS } from "../actions/actionCreatorsDispatch"

import moment from 'moment';

const Calendar = () => {
  const body = document.getElementsByTagName("body");
  const dispatch = useDispatch();
  const calendarContext = useSelector(state => state.calendarState);

  const {
    currentMonth,
    currentYear,
    days,
    detailSidebarToggled,
    eventsSidebarToggled,
    newEventSidebarToggled,
    editEventSidebarToggled,
  } = calendarContext;



  useEffect(() => {
    dispatch(getCurrentDateDispatch(moment().year(), moment().month() + 1, moment().date()));
    dispatch(getEventsFromLS());
  }, [dispatch]);

  if (
    detailSidebarToggled ||
    eventsSidebarToggled ||
    newEventSidebarToggled ||
    editEventSidebarToggled
  ) {
    body[0].style.overflowY = "hidden";
  } else {
    body[0].style.overflowY = "visible";
  }

  return (
    <div className="calendar">
      <div className="title">
        {moment.months(currentMonth - 1)} {currentYear}{" "}
        <Buttons />
      </div>
      <div className="calendar-table">
        <div className="thead">
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
          <div>Sunday</div>
        </div>
        <div className="thead-sm">
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>Th</div>
          <div>F</div>
          <div>St</div>
          <div>S</div>
        </div>
        <div className="tbody">
          {days.map((day, index) => (
            <Day key={index} day={day} />
          ))}
        </div>
      </div>
      <DayDetail />
      <NewEventSidebar />
    </div>
  );
};

export default Calendar;
