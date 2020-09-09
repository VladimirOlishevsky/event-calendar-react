import React from "react";
import Calendar from "./components/calendar/Calendar";
import "./css/App.css";
import NewEventButton from "./components/calendar/NewEventButton";

function App() {
  return (
    <>
      <div className="App">
        <NewEventButton />
        <div className="container">
          <Calendar />
        </div>
      </div>
    </>
  );
}

export default App;
