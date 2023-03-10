import React, { Fragment } from "react";
import fb from "../images/icon-facebook.svg";
import ps from "../images/icon-pinterest.svg";
import inst from "../images/icon-instagram.svg";

const Clock = ({ setDays, setHours, setMinutes, setSeconds }) => {
  return (
    <Fragment>
      <div className="container">
        <h2>WE'RE LAUNCHING SOON</h2>
        <div className="clock">
          <div className="days">
            <p>{setDays}</p>
            <h3>Days</h3>
          </div>

          <div className="hours">
            <p>{setHours}</p>
            <h3>Hours</h3>
          </div>

          <div className="minutes">
            <p>{setMinutes}</p>
            <h3>Minutes</h3>
          </div>

          <div className="seconds">
            <p>{setSeconds}</p>
            <h3>Seconds</h3>
          </div>
        </div>

        <div className="sm">
          <a href="https//www.facebook.com">
            {" "}
            <img src={fb} alt="facebook" />
          </a>
          <a href="https//www.pinterest.com">
            {" "}
            <img src={ps} alt="pinterest" />{" "}
          </a>
          <a href="https//www.instagram.com">
            {" "}
            <img src={inst} alt="instagram" />{" "}
          </a>
        </div>
      </div>
    </Fragment>
  );
};

Clock.defaultProps = {
  setDays: 10,
  setHours: 10,
  setMinutes: 10,
  setSeconds: 10,
};

export default Clock;
