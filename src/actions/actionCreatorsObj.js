import {
  GET_CURRENT_DATE,
  SET_DAYS,
  PREV_MONTH,
  NEXT_MONTH,
  TOGGLE_DETAIL_SB,
  TOGGLE_EVENTS_SB,
  TOGGLE_NEW_EVENT_SB,
  EDIT_EVENT,
  SET_DAY_DETAIL,
  SET_EVENTS,
  DELETE_EVENT,
  EVENT_VIEW,
  CHANGE_EVENT_FIELD,
  CLEAR_EVENT_FIELD
} from "./actionTypes";

export const eventViewObj = (context) => ({
  type: EVENT_VIEW,
  payload: context
})

export const setDaysObj = (daysArr) => ({
  type: SET_DAYS,
  payload: daysArr
});


export const getCurrentDateObj = (year, month, date) => ({
  type: GET_CURRENT_DATE,
  payload: {
    year,
    month,
    date,   
  },
});

// Get prev month
export const prevMonthObj = (month, year) => ({
  type: PREV_MONTH,
  payload: {
    month,
    year
  }
});

// Get next month
export const nextMonthObj = (month, year) => ({
  type: NEXT_MONTH,
  payload: {
    month,
    year
  }
});


// Set day detail
export const setDayDetailObj = (today, events) => ({
  type: SET_DAY_DETAIL,
  payload: {
    today,
    events
  }
});

// Toggle Detail Sidebar
export const toggleDetailSidebarObj = condition => ({
  type: TOGGLE_DETAIL_SB,
  payload: condition
});

// Toggle Events Sidebar
export const toggleEventsSidebarObj = condition => ({
  type: TOGGLE_EVENTS_SB,
  payload: condition
});

// Toggle New Event Sidebar
export const toggleNewEventSidebarObj = condition => ({
  type: TOGGLE_NEW_EVENT_SB,
  payload: condition
});

export const editEventSidebarObj = obj => ({
  type: EDIT_EVENT,
  payload: obj
})

//   // Delete event
export const deleteEventObj = id => ({
  type: DELETE_EVENT,
  payload: id

});

// Set events
export const setEventsObj = events => ({
  type: SET_EVENTS,
  payload: events

});

export const changeServiceField = (name, value) => ({
 type: CHANGE_EVENT_FIELD, 
 payload: { name, value }
})

export const clearEventField = () => ({
  type: CLEAR_EVENT_FIELD,
})