import { useEffect, useState } from "react";
import "./CountdownTimer.css";

export function CountdownTimer({ dropDate }) {
  const [timerString, setTimerString] = useState("");

  useEffect(() => {
    console.log("setting interval...");

    const interval = setInterval(() => {
      const currentDate = new Date().getTime();
      const distance = dropDate - currentDate;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimerString(`${days}d ${hours}h ${minutes}m ${seconds}s`);

      if (distance < 0) {
        console.log("clearing interval...");
        clearInterval(interval);
      }

      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
    }, 1000);
  }, []);

  return (
    <div className="timer-container">
      <p className="timer-header">Candy Drop Starting In</p>
      {timerString && <p className="timer-value">{`⏰ ${timerString}`}</p>}
    </div>
  );
}
