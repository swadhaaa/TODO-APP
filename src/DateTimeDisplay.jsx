import React, { useState, useEffect } from 'react';

function DateTimeDisplay() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="date-time-display">
      {currentDateTime.toLocaleDateString()} {currentDateTime.toLocaleTimeString()}
    </div>
  );
}

export default DateTimeDisplay;
