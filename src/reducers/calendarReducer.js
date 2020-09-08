import {
  GET_CURRENT_DATE,
  SET_DAYS,
  PREV_MONTH,
  NEXT_MONTH,
  TOGGLE_DETAIL_SB,
  TOGGLE_EVENTS_SB,
  TOGGLE_NEW_EVENT_SB,
  SET_DAY_DETAIL,
  ADD_EVENT,
  DELETE_EVENT,
  SET_EVENTS,
  EVENT_VIEW,
} from "../actions/actionTypes";

const initialState = {
  currentDayOfMonth: null,
  currentMonth: null,
  currentYear: null,
  days: [],
  currentEvents: [],
  dayDetail: {
    today: null,
    events: []
  },
  detailSidebarToggled: false,
  eventsSidebarToggled: false,
  newEventSidebarToggled: false,
  editEventSidebarToggled: false,
  // editedEvent: {
  //   id: "",
  //   eventName: "",
  //   date: "",
  //   participants: "",
  //   description: "",
  // },
  events: [],
  flagEvent: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_DATE:

      return {
        ...state,
        currentDayOfMonth: action.payload.day,
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
        //dayDetail: [...state.dayDetail, action.payload]
      };
    case ADD_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload]
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(e => e.id !== action.payload)
      };
    case SET_EVENTS:

      return {
        ...state,
        events: action.payload
      };
    case EVENT_VIEW:
      return {
        ...state,
        flagEvent: action.payload
      }
    // case EDIT_EVENT:
    //   return {
    //     ...state,
    //     editedEvent: action.payload
    //   }
    // case CHANGE_EVENT_FIELD:
    //   console.log(action.payload)
    //   const {name, value} = action.payload;
    //   return {
    //     ...state,
    //     ...editedEvent,[name]: value
    //   };
    // case CLEAR_EVENT_FIELD:
    //   return {
    //     ...state,
    //     editedEvent: {
    //       id: "",
    //       name: "",
    //       date: "",
    //       participants: "",
    //       description: "",
    //     }
    //   }
      default:
        return state;
  }
};