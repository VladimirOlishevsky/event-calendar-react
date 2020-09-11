import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setDayDetailObj, addEventDate, toggleDetailSidebarObj, toggleEventsSidebarObj, toggleNewEventSidebarObj } from "../actions/actionCreatorsObj";

const Day = ({ day: { visible, dayOfMonth, date } }) => {

  const calendarContext = useSelector(state => state.calendarState);
  const dispatch = useDispatch();

  const {
    events,
  } = calendarContext;

  let todaysEvents = [];

  events.forEach(event => {
    if (date === event.date) {
      todaysEvents.push(event);
    }
  });

  const d = new Date();
  const today = d.getDate();
  let cn = "day";

  if (today === dayOfMonth) cn = "day current-day";
  if (!visible) cn = "day hidden";

  return (
    <button
      className={cn}
      onClick={() => {
        dispatch(setDayDetailObj(dayOfMonth, todaysEvents))
        dispatch(toggleDetailSidebarObj(true));
        dispatch(toggleEventsSidebarObj(false));
        dispatch(toggleNewEventSidebarObj(false));
        dispatch(addEventDate(dayOfMonth))
      }}
    >
      {dayOfMonth}
      <div>
        {todaysEvents.map((el, index) => (
          <span key={index} el={el}>
            {" "}
            <i className={`fas fa-star ${el.participants}`}></i>
          </span>
        ))}
      </div>
    </button>
  );
};

export default Day;
