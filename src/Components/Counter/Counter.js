"use client";

import { useState, useEffect } from "react";

const Counter = ({ stopAt = 100 }) => { // `stopAt` is the value where the counter will stop
    const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < stopAt) {
          return prevCount + 1; // Increment until `stopAt`
        } else {
          clearInterval(interval); // Stop the interval
          return prevCount; // Keep the count at the stop value
        }
      });
    }, 10);

    return () => {
      clearInterval(interval); // Cleanup on component unmount
    };
  }, [stopAt]); // Dependency ensures the effect respects the `stopAt` value

  return (
    <div>
      <h2 className="text-6xl font-bold">{count}</h2>
    </div>
  );
};

export default Counter;
