import {
  GET_CURRENT_DATE,
  SET_DAYS,
  PREV_MONTH,
  NEXT_MONTH,
  TOGGLE_DETAIL_SB,
  TOGGLE_EVENTS_SB,
  TOGGLE_NEW_EVENT_SB,
  SET_DAY_DETAIL,
  DELETE_EVENT,
  SET_EVENTS,
  EVENT_VIEW,
  ADD_EVENT_DATE,
} from "../actions/actionTypes";

const initialState = {
  currentDayOfMonth: null,
  currentMonth: null,
  currentYear: null,
  days: [],
  //currentEvents: [],
  dayDetail: {
    today: null,
    events: []
  },
  detailSidebarToggled: false,
  eventsSidebarToggled: false,
  newEventSidebarToggled: false,
  editEventSidebarToggled: false,
  eventDate: '',
  // editedEvent: {
  //   id: "",
  //   eventName: "",
  //   date: "",
  //   participants: "",
  //   description: "",
  // },
  //events: [],
  //flagEvent: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_DATE:

    //console.log(action.payload)
      return {
        ...state,
        currentDayOfMonth: action.payload.date,
          currentMonth: action.payload.month,
          currentYear: action.payload.year
      };
    case SET_DAYS:
      return {
        ...state,
        days: action.payload
      };
    case PREV_MONTH:
      return {
        ...state,
        currentMonth: action.payload.month,
          currentYear: action.payload.year
      };
    case NEXT_MONTH:
      return {
        ...state,
        currentMonth: action.payload.month,
          currentYear: action.payload.year
      };
    case TOGGLE_DETAIL_SB:
      return {
        ...state,
        detailSidebarToggled: action.payload
      };
    case TOGGLE_EVENTS_SB:
      return {
        ...state,
        eventsSidebarToggled: action.payload
      };
    case TOGGLE_NEW_EVENT_SB:
      return {
        ...state,
        newEventSidebarToggled: action.payload
      };
    case SET_DAY_DETAIL:
      return {
        ...state,
        dayDetail: action.payload
      };

    case DELETE_EVENT:
      console.log(action.payload)
      return {
        ...state,
        events: state.events.filter(e => e.id !== action.payload)
      };
    case SET_EVENTS:
      return {
        ...state,
        events: action.payload
      };
      case ADD_EVENT_DATE:
      return {
        ...state,
        eventDate: action.payload
      };
      default:
        return state;
  }
};