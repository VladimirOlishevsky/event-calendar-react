import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { toggleDetailSidebarDispatch, toggleEventsSidebarDispatch, toggleNewEventSidebarDispatch,  setDayDetailDispatch } from "../../actions/actionCreatorsDispatch"

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
        dispatch(setDayDetailDispatch(dayOfMonth, todaysEvents));
        dispatch(toggleDetailSidebarDispatch(true));
        dispatch(toggleEventsSidebarDispatch(false));
        dispatch(toggleNewEventSidebarDispatch(false)); /////////////////////////
      }}
    >
      {dayOfMonth}
      <div>
        {todaysEvents.map((e, index) => (
          <span key={index} e={e}>
            {" "}
            <i className={`fas fa-star ${e.participants}`}></i>
          </span>
        ))}
      </div>
    </button>
  );
};

export default Day;
