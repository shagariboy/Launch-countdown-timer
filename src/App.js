import React, { useState, useEffect } from "react";
import "./App.scss";
import Clock from "./components/clock";

function App() {
  const [setDays, setDaysState] = useState();
  const [setHours, setHoursState] = useState();
  const [setMinutes, setMinutesState] = useState();
  const [setSeconds, setSecondsState] = useState();

  let interval;

  const startTimer = () => {
    const countDown = new Date("December 31, 2023").getTime();

    interval = setInterval(() => {
      const nowDate = new Date().getTime();
      const difference = countDown - nowDate;

      // To get the days, hours, minutes and seconds, by dividing the difference by 1000, 60, 60 and 24 respectively.
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      // A condition to check how long the inteval should run
      // we clear the interval if the difference is less than 0
      if (difference < 0) {
        clearInterval(interval);
      } else {
        // updates the timer constantly
        setDaysState(days);
        setHoursState(hours);
        setMinutesState(minutes);
        setSecondsState(seconds);
      }
    });
  };

  //To load the timer when the page loads
  useEffect(() => {
    startTimer();
  });
  return (
    <div className="App">
      <Clock
        setDays={setDays}
        setHours={setHours}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
      />
    </div>
  );
}

export default App;
