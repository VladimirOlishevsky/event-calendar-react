import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import { toggleDetailSidebarDispatch, toggleEventsSidebarDispatch, toggleNewEventSidebarDispatch } from "../../actions/actionCreatorsDispatch"
import { editEventSidebarObj, changeServiceField, clearEventField } from "../../actions/actionCreatorsObj";


const Navbar = () => {

  const [flag, setFlag] = useState(false)
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <div className="button-group">
        <button
          className="new-event-btn"
          onClick={() => {
           dispatch(toggleNewEventSidebarDispatch(!flag));
           setFlag(!flag)
          //dispatch(toggleDetailSidebarDispatch(false));
           dispatch(toggleEventsSidebarDispatch(false));
           dispatch(clearEventField())
          }}
        >
          <i className="fas fa-plus"></i> New Event
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
