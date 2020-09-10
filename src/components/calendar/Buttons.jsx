import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { prevMonthDispatch, nextMonthDispatch } from "../../actions/actionCreatorsDispatch"


const Buttons = () => {

  const calendarContext = useSelector(state => state.calendarState);

  const dispatch = useDispatch();

  return (
    <div className="buttons">
      <button
        className="prev-btn"
        onClick={() => {
          dispatch(prevMonthDispatch(calendarContext));
        }}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        className="next-btn"
        onClick={() => {
          dispatch(nextMonthDispatch(calendarContext));
        }}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Buttons;
