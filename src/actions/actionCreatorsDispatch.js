import {
  getCurrentDateObj,
  prevMonthObj,
  nextMonthObj,
  setDaysObj,
  deleteEventObj,
  setEventsObj,

} from "./actionCreatorsObj";

import uuid from "uuid";
import moment from 'moment';




export const getCurrentDateDispatch = (year, month, date) => (dispatch) => {

  const currDayOfMonth = date;
  const currMonth = month;
  const currYear = year;

  // Find the starting day of the month
  let startingDay = new Date(currYear, currMonth - 1, 1).getDay();

  //console.log(startingDay) // 2

  dispatch(getCurrentDateObj(currYear, currMonth, currDayOfMonth))
  dispatch(setDaysDispatch(startingDay, currMonth, currYear));

};


export const setDaysDispatch = (sd, m, y) => (dispatch) => {

  let emptyDaysTop = sd === 0 ? 6 : sd - 1;
  let emptyDaysBottom = 0;
  let totalDaysOfMonth = 0;

  if ([1, 3, 5, 7, 8, 10, 12].includes(m)) {
    emptyDaysBottom = 7 - ((sd + 30) % 7);
    totalDaysOfMonth = 31;
  } else if ([4, 6, 9, 11].includes(m)) {
    emptyDaysBottom = 7 - ((sd + 29) % 7);
    totalDaysOfMonth = 30;
  } else {
    if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
      // Leap year
      emptyDaysBottom = 7 - ((sd + 28) % 7);
      totalDaysOfMonth = 29;
    } else {
      // Not a leap year
      emptyDaysBottom = 7 - ((sd + 27) % 7);
      totalDaysOfMonth = 28;
    }
  }

  // Create days array
  let daysArr = [];
  let newM = "";
  let newI = "";
  for (let i = 0; i < emptyDaysTop; i++) {
    let dayObj = {
      visible: false,
      dayOfMonth: 0,
      date: m < 10 ? `${y}-0${m}-${i}` : `${y}-${m}-${i}`
    };
    daysArr.push(dayObj);
  }
  for (let i = 1; i <= totalDaysOfMonth; i++) {
    if (m < 10) {
      newM = `0${m}`;
    } else {
      newM = m;
    }

    if (i < 10) {
      newI = `0${i}`;
    } else {
      newI = i;
    }

    let dayObj = {
      visible: true,
      dayOfMonth: i,
      date: `${y}-${newM}-${newI}`
    };
    daysArr.push(dayObj);
  }
  for (let i = 0; i < emptyDaysBottom; i++) {
    let dayObj = {
      visible: false,
      dayOfMonth: 0,
      date: m < 10 ? `${y}-0${m}-${i}` : `${y}-${m}-${i}`
    };
    daysArr.push(dayObj);
  }

  dispatch(setDaysObj(daysArr))
};


export const prevMonthDispatch = (state) => (dispatch) => {
  if (state.currentMonth === 1) {
    dispatch(getCurrentDateDispatch(state.currentYear - 1, 12, 1));
    dispatch(prevMonthObj(12, state.currentYear - 1))

  } else {
    dispatch(getCurrentDateDispatch(state.currentYear, state.currentMonth - 1, 1));
    dispatch(prevMonthObj(state.currentMonth - 1, state.currentYear))

  }
};

export const nextMonthDispatch = (state) => (dispatch) => {
  if (state.currentMonth === 12) {
    dispatch(getCurrentDateDispatch(state.currentYear + 1, 1, 1));
    dispatch(nextMonthObj(1, state.currentYear + 1))
  } else {
    dispatch(getCurrentDateDispatch(state.currentYear, state.currentMonth + 1, 1));

    dispatch(nextMonthObj(state.currentMonth + 1, state.currentYear))

  }
};


// Add event
export const addEventDispatch = (id, eventName, date, time, participants, description, state) => (dispatch) => {

  console.log(id)
  console.log(eventName)
  console.log(date)
  console.log(time)
  console.log(participants)
  console.log(description)
  console.log(state)

  //console.log();

  const localStorageElement = JSON.parse(localStorage.getItem("events")).find(el => el.id === id);

  let events;

  if (localStorageElement) {
    const changeEvent = {
      id: id,
      date: date,
      time: time,
      participants: participants,
      eventName: eventName,
      description: description
    }
    const localStorageArr = JSON.parse(localStorage.getItem("events")).filter(e => e.id !== id);
    events = [...localStorageArr, changeEvent]
  } else {
    let newEvent = {
      id: uuid.v4(),
      date: date,
      time: time,
      participants: participants,
      eventName: eventName,
      description: description
    }

    events = [...state.events, newEvent]

  };
  //let events = [...state.events, newEvent];

  addEventsToLS(events);
  dispatch(getEventsFromLS());

  getCurrentDateDispatch(state.currentYear, state.currentMonth, 1);
};

// Delete event
export const deleteEventDispatch = (state, id) => (dispatch) => {
  let events = state.events.filter(e => e.id !== id);
  addEventsToLS(events);
  getEventsFromLS();

  dispatch(deleteEventObj(id))
};

// Get events from localstorage
export const getEventsFromLS = () => (dispatch) => {
  const events = localStorage.getItem("events");
  if (events === null) {
    dispatch(setEventsObj([]));
  } else {
    dispatch(setEventsObj(JSON.parse(events)));
  }
};

// Add event to localstorage
export const addEventsToLS = events => {
  localStorage.setItem("events", JSON.stringify(events));
};