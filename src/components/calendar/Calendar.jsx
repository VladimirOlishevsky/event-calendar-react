import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import Day from "./Day";
import DayDetail from "./DayDetail";
import NewEvent from "./NewEvent";
import Buttons from "./Buttons";
import { getCurrentDateDispatch, getEventsFromLS} from "../../actions/actionCreatorsDispatch"

import moment from 'moment';

const Calendar = () => {
  const [jumpToggled, setJumpToggled] = useState(false);
  const body = document.getElementsByTagName("body");
  const dispatch = useDispatch();

  //Months array
  const months = [
    "zero",
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

  //const months = moment.months()

  //console.log(months)

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
    const date = new Date();
    
    dispatch(getCurrentDateDispatch(date.getFullYear(), date.getMonth() + 1, date.getDate()));
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
        {months[currentMonth]} {currentYear}{" "}
        <button
          className={jumpToggled ? "edit-date-btn toggled" : "edit-date-btn"}
          onClick={() => {
            setJumpToggled(!jumpToggled);
          }}
        >
          <i className="fas fa-pencil-alt"></i>
        </button>
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
      <NewEvent />
    </div>
  );
};

export default Calendar;
