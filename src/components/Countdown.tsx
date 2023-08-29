import React, { useEffect, useState } from "react";

const Countdown = ({ targetDate }: any) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const targetTime = new Date(targetDate).getTime();
    const timeLeft = targetTime - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-semibold mb-4">Countdown Timer</h1>
      <div className="text-2xl">
        <div>
          <span className="font-semibold">{timeLeft.days}</span> days
        </div>
        <div>
          <span className="font-semibold">{timeLeft.hours}</span> hours
        </div>
        <div>
          <span className="font-semibold">{timeLeft.minutes}</span> minutes
        </div>
        <div>
          <span className="font-semibold">{timeLeft.seconds}</span> seconds
        </div>
      </div>
    </div>
  );
};

export default Countdown;
