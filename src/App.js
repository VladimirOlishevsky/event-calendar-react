import React from "react";
import Calendar from "./components/calendar/Calendar";
import "./css/App.css";
import Navbar from "./components/calendar/Navbar";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="container">
          <Calendar />
        </div>
      </div>
    </>
  );
}

export default App;
