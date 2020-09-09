import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { setDayDetailObj, addEventDate, toggleDetailSidebarObj, toggleEventsSidebarObj, toggleNewEventSidebarObj } from "../../actions/actionCreatorsObj";

const Day = ({ day: { visible, dayOfMonth, date } }) => {

  const calendarContext = useSelector(state => state.calendarState);
  const dispatch = useDispatch();

//console.log(dayOfMonth)
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
        //dispatch(setDayDetailDispatch(dayOfMonth, todaysEvents));
        dispatch(setDayDetailObj(dayOfMonth, todaysEvents))
        dispatch(toggleDetailSidebarObj(true));
        dispatch(toggleEventsSidebarObj(false));
        dispatch(toggleNewEventSidebarObj(false)); /////////////////////////
        dispatch(addEventDate(dayOfMonth))
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
