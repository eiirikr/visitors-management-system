import { useEffect, useState } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
    format: "AM",
    day: 0,
    date: "",
  });

  useEffect(() => {
    const updateClock = () => {
      let date = new Date();
      let day = date.getDay();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let timeFormat = hours >= 12 ? "PM" : "AM";

      hours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
      const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const formattedTime = {
        hours: hours < 10 ? "0" + hours : hours.toString(),
        minutes: minutes < 10 ? "0" + minutes : minutes.toString(),
        seconds: seconds < 10 ? "0" + seconds : seconds.toString(),
        format: timeFormat,
        day,
        date: formattedDate,
      };

      setTime(formattedTime);
    };

    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="clock d-flex justify-content-start align-items-center vh-100">
      <div className="display shadow p-4 text-center">
        <div className="weekdays d-flex justify-content-center gap-2 mb-3">
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
            (day, index) => (
              <span
                key={index}
                className={
                  index === time.day ? "fw-bold text-primary" : "text-secondary"
                }
              >
                {day}
              </span>
            )
          )}
        </div>
        <div className="timeDisplay display-1 fw-bold">
          <div className="time">
            {time.hours}
            <span className="dot">:</span>
            {time.minutes}
            <span className="dot">:</span>
            {time.seconds}
          </div>
          <div className="format fs-4 text-uppercase">{time.format}</div>
        </div>
        <div className="date-display text-center fw-bold text-danger fs-1">
          {time.date}
        </div>
      </div>
    </section>
  );
}
